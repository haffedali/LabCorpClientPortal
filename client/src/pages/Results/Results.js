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

function createRows(data) {
  if(data) {
    if (data.value) {
      
    } else {
      return [
        {
          name: "hemoglobin createRows", 
          date: "2019-12-12", 
          items: [
            {
              item: "Red Blood Cells", 
              numericValue: "1", 
              unit: "g",
            },
          ]
        },
      ];
    }
  } else {
    return []
  }
}

class Results extends React.Component {
  state = {
    search: "",
    rows: [
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
    
  }
  render() {
    const matchingRows = createRows("a").filter((row) => isFound(row.name, this.state.search) || isFound(row.date, this.state.search))
    return (
      <div>
        <Typography component="h1" variant="h3">
          Test Results
        </Typography>
        <form noValidate autoComplete="off" >
          <TextField id="search" label="Search tests" type="search" onChange={(e) => this.setState({search: e.target.value.toLowerCase()})} />
        </form>
        <p>State Rows: </p>
        <p>{JSON.stringify(this.state.rows)}</p>
        <Button onClick={() => {testResultsApi.doSomething().then((data) => { this.setState({search: "", rows : data.value}) })} }>Refresh</Button>
        <CollapsibleTable className="minWidth: 650" rows={matchingRows} ></CollapsibleTable>
      </div>
    )
  }
}

export default Results;