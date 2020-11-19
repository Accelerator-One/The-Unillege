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
            <Button variant="raised" component="span" download={resource} >
                Download File
            </Button>
          }
        >
          <Typography className={classes.heading}> {name} </Typography>
        </AccordionSummary>
      </Accordion>
    );
};

export default Resource;