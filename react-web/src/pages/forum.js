import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>

        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>

              <Grid item xs>

                <Typography gutterBottom variant="subtitle1">
                    <b>Post Submission Form</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Submit Article for review below
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Article will be published after approval from Admin
                </Typography>

              </Grid>
              <Grid item  xs container direction="column" padding={4} >

                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <TextField
                        id="post-email"
                        label="Email"
                        fullWidth
                        required
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Post Content"
                        multiline
                        rows={4}
                        fullWidth
                        required
                    />
                    <input
                        accept="image/*"
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="raised-button-file"
                        multiple
                        type="file"
                    />
                    <br/><br/>
                    <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span" >
                        Upload Screenshot
                    </Button>
                    </label> 
                </Typography>

              </Grid> 
              
            </Grid>

            <Grid item>
                <Button variant='contained' color='primary'>
                    Submit
                </Button>
            </Grid>

          </Grid>
        </Grid>
      </Paper>
      
      <br/><br/>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>

        <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>

              <Grid item xs>

                <Typography gutterBottom variant="subtitle1">
                    <b>Upload Notes</b>
                </Typography>
                <Typography variant="body2" gutterBottom>
                    Submit attachments below for peers
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Published after approval from Admin
                </Typography>

              </Grid>
              <Grid item  xs container direction="column" padding={4} >

                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                    <TextField
                        id="notes-name"
                        label="Title"
                        fullWidth
                        required
                    />
                    <TextField
                        id="notes-email"
                        label="Email"
                        fullWidth
                        required
                    />
                    <input
                        accept="*"
                        className={classes.input}
                        style={{ display: 'none' }}
                        id="notes-upload"
                        multiple
                        type="file"
                    />
                    <br/><br/>
                    <label htmlFor="raised-button-file">
                    <Button variant="raised" component="span" >
                        Upload Material
                    </Button>
                    </label>
                </Typography>
              </Grid> 
            </Grid>

            <Grid item>
                <Button variant='contained' color='primary'>
                    Submit
                </Button>
            </Grid>

          </Grid>
        

        </Grid>
      </Paper>

    </div>
  );
}
