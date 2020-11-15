import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  avatar: {
    backgroundColor: blue[500],
  }
}));

export default function AlignItemsList({comment_id,user_name,post_id,comment,timestamp,votes}) {
  const classes = useStyles();

  return (
      <>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start" id={comment_id+":"+post_id}>
            <ListItemAvatar>
            <Avatar aria-label="comment" className={classes.avatar}>
                {user_name.substr(0,1)}
            </Avatar>
            </ListItemAvatar>
        <ListItemText
          primary={user_name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {timestamp}
                <br/>
              </Typography>
              {comment}
            </React.Fragment>
          }
        />
        </ListItem>
      </>
      );
}
