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
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

export default function RecipeReviewCard({story_id,story,alumni,company,image}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState({});

  const handleExpandClick = (id) => {
    if(id===story_id)
      setExpanded({
        ...expanded,
        [story_id]:!expanded[story_id]
      });
  };

  return (
    <Card className={classes.root} id={"story:"+story_id} style={{
      'minWidth':'26.6vw'
    }}>
      <CardHeader
        avatar={
          <Avatar aria-label="header" className={classes.avatar} style={{color:'black'}}>
            {alumni.substr(0,1).toUpperCase()}
          </Avatar>
        }
        title={alumni}
        subheader={'Placed at '+company}
      />
      
          <CardMedia className={classes.media}
          image={image} title="content"/>
      
      
      <CardActions disableSpacing>
        Have a look at my story!
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded[story_id],
          })}
          onClick={()=>handleExpandClick(story_id)}
          aria-expanded={expanded[story_id]}
          aria-label="Load comments"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded[story_id]} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
            {story}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
