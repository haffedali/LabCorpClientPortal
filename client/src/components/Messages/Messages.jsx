import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messagesActions from "../../services/Messages/actions";

import { useStyles } from "./Messages.styles";
import ViewSwitch from "./ViewSwitch";
import { MessagesDisplay } from "./MessagesDisplay";

function mapStateToProps(state) {
  return {
    currentPage: state.messagesReducer.currentPage,
    contactId: state.loginReducer.userInfo.contactId,
    inboxMessages: state.messagesReducer.inboxMessages,
    getMessageRequest: state.messagesReducer.getMessageRequest
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messagesActions, dispatch),
  };
}



const Messages = (props) => {
  const classes = useStyles();

  const displayPage = ()=> {
    switch (props.currentPage) {
      case "Inbox":
        if (props.getMessageRequest === true && props.getMessageRequest !== "pending"){
          return <MessagesDisplay messages={props.inboxMessages} />;
        }
      case "Sent":
        return "Currently in development";
      case "Notifications":
        return "Currently in development";
      default:
        return "woopsie, you shouldnt see this!";
    }
  }
  useEffect(()=>{
    const {actions, contactId} = props;
    actions.getInboxEmails(contactId)
  },[])

  
  return (
    <Container className={classes.container}>
      <Grid container direction={"column"} spacing={12}>
        <Grid item>
          <ViewSwitch />
        </Grid>
        <Grid xs={12} item className={classes.displayContainer}>
          {displayPage(props.currentPage, props.inboxMessages)}
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
