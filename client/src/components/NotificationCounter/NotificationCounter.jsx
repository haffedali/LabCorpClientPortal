import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as NotificationCounterActions from "../../services/NotificationCounter/actions";
// import { NotificationCounterApi } from "../../utils";
import { useStyles } from "./NotificationCounter.styles";

function mapStateToProps(state) {
  return {
    count: state.notificationCounterReducer.notificationCount,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(NotificationCounterActions, dispatch),
  };
}

const NotificationCounter = (props) => {
  const { count } = props

  // Somehow get new records from Dynamics every minute or so. If there are new records, update the count.

  const classes = useStyles(props);
  
  return (
    <span className={classes.root}>
      {count}
    </span>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCounter);
