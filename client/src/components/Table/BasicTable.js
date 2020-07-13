import React, { useState } from 'react';
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
import { Divider, Tooltip } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import { Checkout } from '../'

import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';


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

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const datePriority = paymentPriority(row.duedate, row.statecode);
  const styleProps = { 
    ...props, 
    status: row.statecode,
    datePriority: datePriority,
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
        <TableCell className={classes.name}>
          {row.receipt_url ? (
            <Tooltip title='View Receipt' placement="left-start">
              <a href={row.receipt_url} target='_blank' className={classes.receiptLink}>{row.name}</a>
            </Tooltip>
          ) : row.name}
          </TableCell>
        <TableCell align='center' className={classes.datePriority}>
          {datePriority === 1 ? 
            `${row.duedate} (Overdue)` : 
            datePriority === 0 ? `${row.duedate} (PAID)` : 
            row.duedate}
        </TableCell>
        <TableCell align='center' className={classes.money}>${row.totalamount}</TableCell>
        <TableCell align='center' className={classes.paymentStatus} id={`${row.stripeid}-${row.paymentStatus}`}>
          {row.statecode === 2 ? (
            <a href={row.receipt_url}><CheckCircleIcon className={classes.paymentCompleteIcon} /></a>
          ) : (
            <Checkout 
              price={row.totalamount * 100} 
              name={row.name}
              stripeid={row.stripeid}
              productid={row.productid}
              status={{status: row.statecode, reason: row.statuscode}}
              priority={datePriority}
              invoiceid={row.invoiceid}
            />
          ) }
        </TableCell>
        <TableCell align="right">
          <IconButton className={classes.expandBtn} aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
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
                <p>
                  { row.statecode === 0 ? 
                    '*Please submit a payment on or before the due date to avoid additional fees.' :
                    '*Invoice paid. No further action necessary.'
                  }
                  </p>
              </div>
            </Box>
            <Divider className={classes.invItemDivider}/>
          </Collapse>
        </TableCell>
      </TableRow>
      
    </React.Fragment>
  );
}

/* -------------------------------------------------- */
const sortableCells = [
  { id: 'invId', align: '', label: 'ID' },
  { id: 'name', align: '', label: 'Name' },
  { id: 'duedate', align: 'center', label: 'Due Date' },
  { id: 'totalamount', align: 'center', label: 'Amount' },
  { id: 'paymentStatus', align: 'center', label: 'Status' },
];

function SortableTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.headerRow}>
        {sortableCells.map((cell) => (
          <TableCell 
            align={cell.align}
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : 'asc'}
              onClick={createSortHandler(cell.id)}
              className={classes.sortArrow}
            >
              <h3 className={classes.headerCol}>
                {cell.label}
                {orderBy === cell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null
                }
              </h3>
            </TableSortLabel>
          </TableCell>
        ))}
        {/* <TableCell align='center'>
          <h3 className={classes.headerCol}>Status</h3>
        </TableCell> */}
        <TableCell align='right' />
        </TableRow>
      </TableHead>
  );
}
/* -------------------------------------------------- */
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function BasicTable(props) {
  const { rows } = props;
  const classes = useStyles(props);

  const [order, setOrder] = useState('desc');
  const [orderBy, setOrderBy] = useState('paymentStatus');

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.invoiceTableContainer}>
      <Table aria-label="collapsible table">
        <SortableTableHead 
          classes={classes}
          order={order}
          orderBy={orderBy}
          onRequestSort={handleRequestSort}
        />
        <TableBody>
          {stableSort(rows, getComparator(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row) => {
            return (
              <Row key={row.name} row={row} />
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          className={classes.paginationComponent}
        />
    </TableContainer>
  );
}