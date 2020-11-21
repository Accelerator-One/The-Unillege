import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightMedium,
    },
  }));

const Resource = ({name,resource})=> {

    const classes = useStyles();
    
    return(
      
        
        
        <Accordion>
        
        <AccordionSummary
          expandIcon={
            <a type = "button" target="_blank" href={resource} variant="raised" component="span">
                Download File
            </a>
            
          }
        >
          <Typography className={classes.heading}> {name} </Typography>
        </AccordionSummary>
      </Accordion>
      
  
    );
};

export default Resource;