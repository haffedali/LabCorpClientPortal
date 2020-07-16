/* React */
import React from 'react';
/* Redux */
import { useSelector } from 'react-redux';
/* LabCorp */
import { useStyles } from './InvoiceList.styles';
import { BasicTable } from '../';


const paymentStatus = (due, status) => {
  if (!due) {
    if (status !== 0) {
      return 0;
    } else return;
  } 
  
  if (status !== 0) return 0;

  const [year, month, date] = due.split('-');
  const duedate = new Date(`${month}/${date}/${year}`);
  const diffDays = Math.ceil((duedate - Date.now()) / (1000 * 60 * 60 * 24)); 
  
  return diffDays < 0 ? 2 : 1;
}

const getTableData = (data) =>
  data.map((cols) => ({
      invId: cols[0], 
      name: cols[1], 
      duedate: cols[2], 
      totalamount: cols[3], 
      description: cols[4], 
      products: cols[5],
      stripeid: cols[6],
      statecode: cols[7],
      statuscode: cols[8],
      productid: cols[9],
      invoiceid: cols[10],
      paymentStatus: paymentStatus(cols[2], cols[7]),
      receipt_url: cols[11]
  }));

const InvoiceList = (props) => {
  const classes = useStyles(props);
  
  const invoices = useSelector(state => state.invoiceReducer.invoices);

  return (
    <div className={classes.root}>
      <h2>{props.listTitle}</h2>
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