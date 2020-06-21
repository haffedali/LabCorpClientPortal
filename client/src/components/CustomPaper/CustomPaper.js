import React from 'react';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './CustomPaper.styles';
// <Paper elevation={3} className={classes.customPaper} />

export default function SimplePaper(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
        {props.innerPage}
    </div>
  );
}