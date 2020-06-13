import React from 'react';
import { Typography, TableContainer, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import InnerTable from '../../components/InnerTable'

const TestResults = (props) => {
  return (
    <div>
      <Typography variant="h2" component="h1">Test Results</Typography>
      <TextField id="standard-search" label="Search tests" type="search" focus/>

      <InnerTable></InnerTable>
    </div>
  )
}

export default TestResults;