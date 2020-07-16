import React from 'react';
import {Paper, Divider, Button} from '@material-ui/core';

import { useStyles } from './BillingOverview.styles';
import { InvoiceList } from '../';
import { useSelector } from 'react-redux';

const BillingOverview = (props) => {
  const classes = useStyles(props);
  const user = useSelector(state => state.session.user);
  const stripeid = useSelector(state => state.invoiceReducer.invoices[0].stripeid);

  return (
    <div className={classes.root}>
      {/* <h2>Billing Information</h2> */}
      <Paper elevation={2} className={classes.customPaper}>
        <div className={classes.billingInfoCont}>
          <div>
            <h3>Welcome back,</h3>
          </div>
          <div className={classes.patientName}>
            <h3>{user.firstName} {user.lastName}!</h3>
          </div>
        </div>
        <div>
          <form method="POST" action={`/create-customer-portal-session?stripeid=${stripeid}`}>
              <Button variant="outline" type="submit" className={classes.stripeBilling}>Manage your billing </Button>
          </form>
        </div>
      </Paper>
      <Divider className={classes.divider} />
      <InvoiceList listTitle={'Invoices'}/>
      <Divider className={classes.divider} />
    </div>
  );
};

export default BillingOverview;