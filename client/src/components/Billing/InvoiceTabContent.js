/* React */
import React from 'react';
/* Styles */
import {Divider} from '@material-ui/core';
import { useStyles } from './InvoiceTabContent.styles';
/* LabCorp */
import { InvoiceList } from '../';

const InvoiceTabContent = (props) => {
  const classes = useStyles(props);
  return (
    <div>
      <h2>Invoices</h2>
      <h3>...</h3>
      <Divider className={classes.divider} />
      <InvoiceList />
    </div>
    
  );
}

export default InvoiceTabContent;