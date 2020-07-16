import React from 'react';
import {Paper, Divider} from '@material-ui/core';

import { useStyles } from './BillingOverview.styles';
import { InvoiceList } from '../';
import { useSelector } from 'react-redux';

const BillingOverview = (props) => {
  const classes = useStyles(props);
  const user = useSelector(state => state.session.user);

  return (
    <div className={classes.root}>
      <h2>Billing Information</h2>
      <Paper elevation={2} className={classes.customPaper}>
        <div className={classes.billingInfoCont}>
        <div>
          <h3>Welcome back,</h3>
        </div>
        <div className={classes.patientName}><h3>{user.firstName} {user.lastName}!</h3></div>
        </div>
      </Paper>
      <Divider className={classes.divider} />
      <InvoiceList listTitle={'Invoices'}/>
      <Divider className={classes.divider} />
    </div>
  );
};

export default BillingOverview;