import React from 'react';
import {Paper, Divider} from '@material-ui/core';

import { useStyles } from './BillingOverview.styles';
import { InvoiceList } from '../';

const BillingOverview = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <InvoiceList listTitle={'Invoice History'}/>
      <Divider className={classes.divider} />
      <h2>Billing Information</h2>
      <Paper elevation={2} className={classes.customPaper}/>
      <Divider className={classes.divider} />
    </div>
  );
};

export default BillingOverview;