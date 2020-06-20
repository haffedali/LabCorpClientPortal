import React, { Component } from 'react';

import { CollapsibleTable } from '../../components'
import { Typography,
  TextField,
  Button
} from '@material-ui/core';

import { testResultsApi } from '../../utils/testResultsApi';

function isFound(str, q) {
  return str.toLowerCase().indexOf(q) > -1
}

const rows = [
  {
    name: "hemoglobin", 
    date: "2019-12-12", 
    items: [
      {
        item: "Red Blood Cells", 
        numericValue: "1", 
        unit: "g",
      },
    ]
  },
]

class Results extends React.Component {
  state = {
    search: "",
    apiData: {poop: "is pooop"},
  }
  render() {
    const matchingRows = rows.filter((row) => isFound(row.name, this.state.search) || isFound(row.date, this.state.search))
    return (
      <div>
        <Typography component="h1" variant="h3">
          Test Results
        </Typography>
        <form noValidate autoComplete="off" >
          <TextField id="search" label="Search tests" type="search" onChange={(e) => this.setState({search: e.target.value.toLowerCase()})} />
        </form>
        <p>API data: </p>
        <p>{JSON.stringify(this.state.apiData)}</p>
        <Button onClick={() => {testResultsApi.doSomething().then((data) => { this.setState({apiData: data}) })} }>Refresh</Button>
        <CollapsibleTable className="minWidth: 650" rows={matchingRows} ></CollapsibleTable>
      </div>
    )
  }
}

export default Results;