import React from 'react';
import {Paper, Divider} from '@material-ui/core';

import { useStyles } from './CustomPaper.styles';


const invoiceList = (data) => {
  return (
    <>
    <h3>Invoice History</h3>
    {Object.keys(data).map((keyName, i) => (
      <div key={i}>
        {Object.keys(data[0]).map((key, index) => (
          <div>{data[0][key]}</div>
        ))}
      </div>
    ))}
    </>
  )
}

export default function SimplePaper(props) {
  const classes = useStyles(props);
  const invoices = props.invoiceData;
  return (
    <div className={classes.root}>
      <h2>Overview</h2>
      <Paper elevation={3} className={classes.customPaper}/>
      <Divider className={classes.divider} />
      <>{invoiceList(invoices)}</>
    </div>
  );
}

