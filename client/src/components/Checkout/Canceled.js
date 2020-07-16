import React from 'react';
import { Link } from 'react-router-dom';
import { useStyles } from './Checkout.styles';

const Canceled = () => {
  const classes = useStyles();

  return (
  <div>
    <h1>Your payment was canceled</h1>
    <div>
      <Link className={classes.successReceipt} to="/billing">Back to Billing</Link>
    </div>
    
  </div>
  );
};

export default Canceled;
