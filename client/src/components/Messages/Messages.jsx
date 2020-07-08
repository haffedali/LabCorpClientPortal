import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as messagesActions from "../../services/Messages/actions";

import { useStyles } from "./Messages.styles";
import ViewSwitch from "./ViewSwitch";
import { MessagesDisplay } from "./MessagesDisplay";
import {messagesApi} from '../../utils';


function mapStateToProps(state) {
  return {
    currentPage: state.messagesReducer.currentPage,
    userInfo: state.loginReducer.userInfo,
    inboxMessages: state.messagesReducer.inboxMessages,
    getMessageRequest: state.messagesReducer.getMessageRequest,
    sentMessages: state.messagesReducer.sentMessages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messagesActions, dispatch),
  };
}



const Messages = (props) => {
  const classes = useStyles();
  const {actions, userInfo} = props;

  const displayPage = ()=> {
    switch (props.currentPage) {
      case "Inbox":
        if (props.getMessageRequest === true && props.getMessageRequest !== "pending"){
          return <MessagesDisplay messages={props.inboxMessages} />;
        }
        break;
      case "Sent":
        return <MessagesDisplay messages={props.sentMessages} />
        // return "Currently in development";
        break;
      case "Notifications":
        return "Currently in development";
        break;
      default:
        return "woopsie, you shouldnt see this!";
    }
  }
  useEffect(()=>{
    actions.getInboxEmails(userInfo.contactId)
    // messagesApi.getSentEmails(userInfo.email)
    // .then(r=>console.log(r.data.value))
    actions.getSentEmails(userInfo.email)
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


