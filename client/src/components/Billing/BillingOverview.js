import React from 'react';
import {Paper, Divider} from '@material-ui/core';

import { useStyles } from './BillingOverview.styles';
import { InvoiceList } from '../';

const BillingOverview = (props) => {
  const classes = useStyles(props);

  return (
    <div className={classes.root}>
      <h2>Overview</h2>
      <Paper elevation={2} className={classes.customPaper}/>
      <Divider className={classes.divider} />
      <InvoiceList />
      <div>
        <h3></h3>
      </div>
    </div>
  );
};

export default BillingOverview;