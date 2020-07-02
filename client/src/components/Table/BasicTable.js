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
import { Divider, Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const paymentPriority = (classes, due) => {

  const [year, month, date] = due.split('-');

  const duedate = new Date(`${month}/${date}/${year}`);
  const diffDays = Math.ceil((duedate - Date.now()) / (1000 * 60 * 60 * 24)); 

  if (diffDays <= 15) {
    return classes.datePriority1;
  } else if (diffDays <= 31) {
    return classes.datePriority3;
  } else {
    return classes.datePriority3
  }

}

const PAID = false;

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useStyles(props);

  return (
    <React.Fragment>

      <TableRow className={classes.root}>
        <TableCell component="th" scope="row" className={classes.firstcol}>
          {row.invId}
        </TableCell>
        <TableCell className={classes.name}>{row.name}</TableCell>
        <TableCell align='center' className={paymentPriority(classes, row.duedate)}>{row.duedate}</TableCell>
        <TableCell align='center' className={classes.money}>${row.totalamount}</TableCell>
        <TableCell align='center' className={classes.paymentStatus}>
          {PAID ? (
            <CheckCircleIcon className={classes.paymentCompleteIcon} />
          ) : (
            <Button variant='outlined' className={classes.btnSecondary}>
              <p className={classes.btnPrimaryTxt}>Pay ${row.totalamount}</p>
            </Button>
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
        <TableCell style={{ paddingBottom: 0, paddingTop: 0, border: 0, paddingLeft: 0 }} colSpan={6}>
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
                      <TableCell align="right" className={classes.money}>${productRow.priceperunit}</TableCell>
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
