import React from 'react';
import Paper from '@material-ui/core/Paper';

import { useStyles } from './CustomPaper.styles';

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.customPaper} />
    </div>
  );
}