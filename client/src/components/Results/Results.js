import React, { useEffect } from 'react';
import { 
  Typography,
  TextField,
} from '@material-ui/core';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { CollapsibleTable } from '../../components'
import * as resultsActions from "../../services/Results/actions";

function mapStateToProps(state) {
  return {
    search: state.resultsReducer.search,
    rows: state.resultsReducer.rows,
    contactId: state.loginReducer.userInfo.contactId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultsActions, dispatch),
  };
}

const Results = (props) => {
  const { actions, search="", rows=[], contactId } = props;
  const dispatchSearch = (str) => {
    actions.changeSearch(str);
  };
  const dispatchLoad = () => {
    actions.loadData(contactId)
  }
  useEffect(()=>{
    dispatchLoad()
  },[])
  return (
    <div>
      <Typography component="h1" variant="h3">
        Test Results
      </Typography>
      <TextField 
        id="search"
        label="Search tests"
        type="search"
        onChange={(e) => dispatchSearch(e.target.value.toLowerCase())}
        defaultValue={search}
        />
      <CollapsibleTable className="collapsibleTable" rows={rows} ></CollapsibleTable>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
