import React, { Component } from 'react';

import { CollapsibleTable } from '../../components'
import { Typography,
  TextField
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  table: {
    minWidth: 650,
  },
}));

const Results = (props) => {
  const classes = useStyles();
  return (
    <div>
      <Typography component="h1" variant="h3">
        Test Results
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="search" label="Search tests" type="search" />
      </form>
      <CollapsibleTable className={classes.table}></CollapsibleTable>
    </div>
  )
}

export default Results;