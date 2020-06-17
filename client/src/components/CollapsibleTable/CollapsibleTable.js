import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useRowStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
}));

function createData(name, date) {
  return {
    name,
    date,
    items: [
      { item: 'Red Blood Cell Count', numericValue: '100', unit: 'per droplet' },
      { item: 'Iron', numericValue: '0.5', unit: 'g' },
      { item: 'Chemical X', numericValue: '1', unit: 'tsp' },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          {row.name}
        </TableCell>
        <TableCell>
          {row.date}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Itemized Results
              </Typography>
              <Table size="small" aria-label="test results">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="right">Numeric Value</TableCell>
                    <TableCell>Unit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.items.map((itemsRow) => (
                    <TableRow key={itemsRow.item}>
                      <TableCell component="th" scope="row">{itemsRow.item}</TableCell>
                      <TableCell align="right">{itemsRow.numericValue}</TableCell>
                      <TableCell>{itemsRow.unit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('Hemoglobin', "2019-11-01"),
  createData('Hemoglobin', "2018-11-01"),
  createData('Hemoglobin', "2017-11-01"),
];

export default function CollapsibleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>{props.search}</TableCell>
            <TableCell component="th">Test</TableCell>
            <TableCell component="th">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name + row.date} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
