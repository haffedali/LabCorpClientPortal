import React from 'react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { useStyles } from './BasicTable.styles';
import { Divider } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { Checkout } from '../'

const paymentPriority = (due, status) => {
  if (!due) {
    if (status !== 0) {
      return 0;
    } else return;
  } 
  
  if (status !== 0) return 0;

  const [year, month, date] = due.split('-');
  const duedate = new Date(`${month}/${date}/${year}`);
  const diffDays = Math.ceil((duedate - Date.now()) / (1000 * 60 * 60 * 24)); 
  
  return diffDays <= 0 ? 1 : diffDays <= 15 ? 2 : 3;
}

const PAID = false;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const styleProps = { 
    ...props, 
    status: row.statecode,
    datePriority: paymentPriority(row.duedate, row.statecode)
  };
  const classes = useStyles(styleProps);

  return (
    <React.Fragment>

      <TableRow 
        hover 
        className={classes.root}
      >
        <TableCell component="th" scope="row" className={classes.firstcol}>
          {row.invId}
        </TableCell>
        <TableCell className={classes.name}>{row.name}</TableCell>
        <TableCell align='center' className={classes.datePriority}>{row.duedate || 'N/A'}</TableCell>
        <TableCell align='center' className={classes.money}>${row.totalamount}</TableCell>
        <TableCell align='center' className={classes.paymentStatus}>
          {row.statecode === 2 ? (
            <CheckCircleIcon className={classes.paymentCompleteIcon} />
          ) : (
            <Checkout 
              price={row.totalamount * 100} 
              name={row.name}
              stripeid={row.stripeid}
              status={{status: row.statecode, reason: row.statuscode}}
            />
          ) }
        </TableCell>
        <TableCell align="right">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon className={classes.arrowIcons}/> : <KeyboardArrowDownIcon className={classes.arrowIcons}/>}
          </IconButton>
        </TableCell>
      </TableRow>

      {/* DETAILS */}
      <TableRow className={classes.detailsRoot}>
        <TableCell style={{ padding: 0, border: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit className={classes.collapsedContainer}>
            <Divider className={classes.invItemDivider} style={{marginBottom: '20px'}}/>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div" className={classes.detailsHeader}>
                Details
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow className={classes.testTblRoot}>
                    <TableCell>Lab Test</TableCell>
                    <TableCell align="right">Total price (USD)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.products.map((productRow) => (
                    <TableRow key={productRow.invoicedetailid} className={classes.testTblRoot}>
                      <TableCell component="th" scope="row">
                        {productRow.productname}
                      </TableCell>
                      <TableCell align="right" className={classes.moneyDetails}>${productRow.priceperunit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className={classes.invDetailsDescCont}>
                <p>*{row.description}</p>
              </div>
            </Box>
            <Divider className={classes.invItemDivider}/>
          </Collapse>
        </TableCell>
      </TableRow>
      
    </React.Fragment>
  );
}

export default function BasicTable(props) {
  const { rows } = props;
  const classes = useStyles(props);

  return (
    <TableContainer component={Paper} className={classes.invoiceTableContainer}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow className={classes.headerRow}>
            <TableCell className={classes.firstcol}><h3 className={classes.headerCol}>ID</h3></TableCell>
            <TableCell><h3 className={classes.headerCol}>Name</h3></TableCell>
            <TableCell align='center'><h3 className={classes.headerCol}>Due Date</h3></TableCell>
            <TableCell align='center'><h3 className={classes.headerCol}>Amount</h3></TableCell>
            <TableCell align='center'><h3 className={classes.headerCol}>Status</h3></TableCell>
            <TableCell align='right' />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
