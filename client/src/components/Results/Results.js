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
    data: state.resultsReducer.ajaxData,
    rows: state.resultsReducer.matchedRows,
    contactId: state.loginReducer.userInfo.contactId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultsActions, dispatch),
  };
}

const Results = (props) => {
  const { actions, search="", rows=[], data, contactId } = props;
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
      {/* TODO
        I should wait until I have notifications before i need refresh button.
        And I should put it inside the table. I think I should switch to MaterialTable at that point. 
        <Button onClick={()=>dispatchLoad()}>Refresh</Button> 
      */}
      <TextField 
        id="search"
        label="Search tests"
        type="search"
        onChange={(e) => dispatchSearch(e.target.value.toLowerCase())}
        defaultValue={search}
        />
      <CollapsibleTable className="minWidth: 650" rows={rows} ></CollapsibleTable>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
