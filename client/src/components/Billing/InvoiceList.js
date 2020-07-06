/* React */
import React from 'react';
/* Redux */
import { useSelector } from 'react-redux';
/* LabCorp */
import { useStyles } from './InvoiceList.styles';
import { BasicTable } from '../';

const getTableData = (data) => 
  data.map((cols) => ({
    invId: cols[0], 
    name: cols[1], 
    duedate: cols[2], 
    totalamount: cols[3], 
    description: cols[4], 
    products: cols[5]
  }));

const InvoiceList = (props) => {
  const classes = useStyles(props);
  
  // Retrieve data from state
  const invoices = useSelector(state => state.invoiceReducer.invoices);

  return (
    <div className={classes.root}>
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
  );
}

export default InvoiceList;