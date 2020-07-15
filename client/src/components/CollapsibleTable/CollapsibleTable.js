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
                  {row.items.map((i) => (
                    <TableRow key={i.item}>
                      <TableCell component="th" scope="row">{i.item}</TableCell>
                      <TableCell align="right">{i.numericValue}</TableCell>
                      <TableCell>{i.unit}</TableCell>
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

export default function CollapsibleTable(props) {
  const { rows } = props
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell component="th">Test</TableCell>
            <TableCell component="th">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.length > 0 ?
            rows.map((row) => (
              <Row key={row.rowKey} row={row} />
            )) :
            <TableRow>
              <TableCell colSpan="3" align="center">
                <p>
                  No matching results. 
                </p>
              </TableCell>
            </TableRow>
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
