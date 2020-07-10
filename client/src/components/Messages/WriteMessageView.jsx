import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  Paper,
  InputLabel,
  Input,
  TextField,
  InputAdornment,
} from "@material-ui/core";
import { AccountCircle, Subject } from "@material-ui/icons";

import { useStyles } from "./WriteMessageView.styles";

const WriteMessageView = (props) => {
  const userEmail = useSelector((state) => state.loginReducer.userInfo.email);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentMessage, setCurrentMessage] = useState({
    ss_sentfrom: userEmail,
  });
  
  const handleTextFieldChanges = (e) => {
    const { name, value } = e.target;
    setCurrentMessage({ ...currentMessage, [name]: value });
    dispatch({ type: "UPDATE_EMAIL_OBJ", emailObj: currentMessage });
  };

  
  return (
    <Grid container direction={"column"}>
      <Grid item xs={2} className={classes.toInputContainer}>
        <InputLabel>To</InputLabel>
        <Input
          name="recipient"
          className={classes.toInput}
          onChange={(e) => handleTextFieldChanges(e)}
          value={currentMessage.recipient}
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={2} className={classes.toInputContainer}>
        <InputLabel>Subject</InputLabel>
        <Input
          name="subject"
          className={classes.toInput}
          onChange={(e) => handleTextFieldChanges(e)}
          value={currentMessage.subject}
          startAdornment={
            <InputAdornment position="start">
              <Subject />
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          name="body"
          onChange={(e) => handleTextFieldChanges(e)}
          value={currentMessage.body}
          className={classes.bodyTextField}
          multiline
          variant={"outlined"}
          rows={20}
        />
      </Grid>
    </Grid>
  );
};

export default WriteMessageView;
