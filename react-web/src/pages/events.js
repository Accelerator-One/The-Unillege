import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

export default function Events(props) {
  
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> Diwali Celebration Notice </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Wishing you all a very Happy Diwali for year 2020.
          </Typography>
          <blockquote>
              &nbsp;
          </blockquote>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}> Unillege launched for students </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Get yourself acquainted with your college now! - A College Information Manager App
          </Typography>
          <blockquote>
              &nbsp;
          </blockquote>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}
