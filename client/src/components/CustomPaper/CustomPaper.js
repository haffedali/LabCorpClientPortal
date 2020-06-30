import React, { Fragment, useEffect } from 'react';
import {Paper, Divider} from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useStyles } from './CustomPaper.styles';


const invoiceList = (data) => {
  return (
    <Fragment>
      <h3>Invoice History</h3>

      {data.map((obj, i) => (
        <div key={i}>
          {Object.keys(data[i]).map((key, index) => (
            <div key={index}>{key}: {data[i][key]}</div>
          ))}
        </div>
    ))}
    </Fragment>
  )
}

export default function SimplePaper(props) {
  const classes = useStyles(props);
  const invoices = useSelector(state => state.invoiceReducer.invoices);

  useEffect(() => {
    console.log('Invoices: ', invoices)
  }, []);

  return (
    <div className={classes.root}>
      <h2>Overview</h2>
      <Paper elevation={3} className={classes.customPaper}/>
      <Divider className={classes.divider} />
      {invoiceList(invoices)}
    </div>
  );
}

