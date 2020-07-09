import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {sendEmail} from "../../services/Messages/actions";

import { Button, Grid } from "@material-ui/core";
import { Email } from "@material-ui/icons";

import {useStyles} from './ButtonSet.styles'

const ButtonSet = (props) => {
  const classes = useStyles();
  const emailObj = useSelector(state => state.messagesReducer) 
  const dispatch = useDispatch();

  const handleSendEmailClick = () => {
    dispatch(sendEmail(emailObj.emailObj));
    
  }

  if (props.currentPage !== "Create") {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "SWITCH_PAGE", data: "Create" })}
      >
        Create
      </Button>
    );
  } else {
    return (
      <div>
        <Grid container>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            // onClick={() => console.log(emailObj.emailObj)}
            onClick={()=> handleSendEmailClick()}
          >
            <Email />
          </Button>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            onClick={() => dispatch({ type: "SWITCH_PAGE", data: "Inbox" })}
          >
            X
          </Button>
        </Grid>
      </div>
    );
  }
};

export default ButtonSet;
