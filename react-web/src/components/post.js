import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comment from './Comment';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

export default function RecipeReviewCard({post_id,post,user_id,timestamp,image,votes}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id={post_id}>
      <CardHeader
        avatar={
          <Avatar aria-label="header" className={classes.avatar}>
            {user_id}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={user_id}
        subheader={timestamp}
      />
      {
          (image!=="")?
          <CardMedia className={classes.media}
          image={image} title="content"/>
          : <p>&nbsp;</p>
      }
      
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post}
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        
        {votes}
        <IconButton aria-label="like">
          <FavoriteIcon />
        </IconButton>
        
        <TextField id={'comment-'+post_id} 
                  label='Add comment' noValidate autoComplete='off'
                  variant='outlined' size='small' />
        
        <IconButton>
            <SendIcon/>
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Load comments"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <List>
                <Comment comment_id='1' user_name='Shubham Luthra' post_id='1' comment='Hi!' timestamp='12 Nov, 2020' votes='2'/>
                <Comment comment_id='2' user_name='Harsh Srivastava' post_id='2' comment='Hello!' timestamp='12 Nov, 2020' votes='1'/>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}
