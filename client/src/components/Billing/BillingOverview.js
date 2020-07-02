import React from 'react';
import {Paper, Divider} from '@material-ui/core';
import { useSelector } from 'react-redux';

import { useStyles } from './BillingOverview.styles';
import { BasicTable } from '../';

const getTableData = (data) => 
  data.map((cols) => ({
    invId: cols[0], 
    name: cols[1], 
    duedate: cols[2], 
    totalamount: cols[3], 
    description: cols[4], 
    products: cols[5]
  }))

export default function BillingOverview(props) {
  const classes = useStyles(props);
  const invoices = useSelector(state => state.invoiceReducer.invoices);

  return (
    <div className={classes.root}>
      <h2>Overview</h2>
      <Paper elevation={2} className={classes.customPaper}/>
      <Divider className={classes.divider} />
      
      <div>
        <h3>Invoice History</h3>
        <BasicTable 
          rows={getTableData(invoices.map((obj) => 
            Object.keys(obj).map((key) => {
              return key === 'products' 
                ? JSON.parse(obj[key]).map((productField) => (
                  productField
                )) 
                : obj[key]
            })
          ))}/>
      </div>
      <Divider className={classes.divider} />
      <div>
        <h3>Completed Payments</h3>
      </div>
    </div>
  );
}