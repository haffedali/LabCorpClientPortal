import React from 'react';
import { 
  Typography,
  TextField,
  Button
} from '@material-ui/core';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CollapsibleTable } from '../../components'
import * as resultsActions from "../../services/Results/actions";

function mapStateToProps(state) {
  return {
    search: state.resultsReducer.search,
    data: state.resultsReducer.ajaxData,
    rows: state.resultsReducer.rows,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultsActions, dispatch),
  };
}

const Results = (props) => {
  const { actions, search, rows=[] } = props;
  const dispatchSearch = (str) => {
    actions.changeSearch(str);
  };
  const dispatchLoad = () => {
    actions.loadData()
  }
  return (
    <div>
      <Typography component="h1" variant="h3">
        Test Results
      </Typography>
      <Button onClick={()=>dispatchLoad()}>Refresh</Button>
      <TextField 
        id="search" 
        label="Search tests" 
        type="search" 
        onChange={(e) => dispatchSearch(e.target.value.toLowerCase())} 
        defaultValue={search} />
      <CollapsibleTable className="minWidth: 650" rows={rows} ></CollapsibleTable>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
