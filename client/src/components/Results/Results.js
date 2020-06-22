import React from 'react';

import { CollapsibleTable } from '../../components'
import { Typography,
  TextField
} from '@material-ui/core';


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

function isFound(str, q) {
  return str.toLowerCase().indexOf(q) > -1
}

const rows = [
  createData('Hemoglobin', "2019-11-01"),
  createData('Hemoglobin', "2018-11-01"),
  createData('Hemoglobin', "2017-11-01"),
];


class Results extends React.Component {
  state = {
    search: "",
  }
  render() {
      const matchingRows = rows.filter((row) => isFound(row.name, this.state.search) || isFound(row.date, this.state.search))
      return (
      <div>
        <Typography component="h1" variant="h3">
          Test Results
        </Typography>
        <TextField id="search" label="Search tests" type="search" onChange={(e) => this.setState({search: e.target.value.toLowerCase()})} />
        <CollapsibleTable className="minWidth: 650" rows={matchingRows} ></CollapsibleTable>
      </div>
    )
  }
}

export default Results;