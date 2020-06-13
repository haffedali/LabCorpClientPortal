import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, TableCell, Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 640,
    padding: "0 10px",
  },
});

const InnerTable = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell colspan="3" component="th">
              <Button variant="contained">Download</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th">Item</TableCell>
            <TableCell align="right" >Numeric Value</TableCell>
            <TableCell component="th">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Red Blood Cell</TableCell>
            <TableCell align="right">100</TableCell>
            <TableCell>Cells per droplet</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Iron</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell>mg</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Chemical X</TableCell>
            <TableCell align="right">1</TableCell>
            <TableCell>tsp</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default InnerTable;