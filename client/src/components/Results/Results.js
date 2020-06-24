import React from 'react';

import { CollapsibleTable } from '../../components'
import { Typography,
  TextField,
  Button
} from '@material-ui/core';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as resultsActions from "../../services/Results/actions";

function mapStateToProps(state) {
  return {
    ...state,
    search: "",
    actionsDesc: JSON.stringify(resultsActions, (k,v)=>{return (typeof v === "function" ? k + "was a function" : v)}), 
    actions: resultsActions,
    rows: [
      createData('Hemoglobin', "2019-11-01"),
      createData('Hemoglobin', "2018-11-01"),
      createData('Hemoglobin', "2017-11-01"),
    ],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultsActions, dispatch),
  };
}

function createData(name, date) {
  return {
    name: name,
    date: date,
    items: [
      { item: 'Red Blood Cell Count', numericValue: '100', unit: 'per droplet' },
      { item: 'Iron', numericValue: '0.5', unit: 'g' },
      { item: 'Chemical X', numericValue: '1', unit: 'tsp' },
    ],
  };
}

function isFound(str, q) {
  return (str && str.toLowerCase().indexOf(q) > -1)
}

const Results = (props) => {
  const { actions, rows=[] } = props;
  const dispatchSearch = (str) => {
    actions.changeSearch(str);
  };
  const dispatchLoad = () => {
    actions.loadData()
  }
  const { search } = props;
  const matchedRows = rows.filter((row)=>{isFound(search,row.name) || isFound(search,row.date)})
  return (
    <div>
      <Typography component="h1" variant="h3">
        Test Results
      </Typography>
      <Button onClick={()=>dispatchLoad()}>Load</Button>
      <TextField id="search" label="Search tests" type="search" onChange={(e) => dispatchSearch(e.target.value.toLowerCase())} />
      <CollapsibleTable className="minWidth: 650" rows={matchedRows} ></CollapsibleTable>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
