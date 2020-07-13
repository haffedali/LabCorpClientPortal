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
      <InvoiceList />
      <Divider className={classes.divider} />
    </div>
    
  );
}

export default InvoiceTabContent;