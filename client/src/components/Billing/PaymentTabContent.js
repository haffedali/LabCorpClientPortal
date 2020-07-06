/* React */
import React from 'react';
/* Styles */
import { useStyles } from './PaymentTabContent.styles';
import { Button } from '@material-ui/core';

const PaymentTabContent = (props) => {
  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <h2>Payments</h2>
      <Button variant='contained' color='primary'>Pay</Button>
    </div>
  );
}

export default PaymentTabContent;