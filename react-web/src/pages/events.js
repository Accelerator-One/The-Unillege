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
      { 
        props.use.events.map(event => (
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}> {event.title} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {event.event_details}
          </Typography>
          <blockquote>
              &nbsp;
          </blockquote>
        </AccordionDetails>
      </Accordion>
        ))
      
      }
      

    </div>
    
  );
}
