import React, { useState } from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../services/LogIn/actions";

function mapStateToProps(state) {
  return {
    loggedIn: state.loginReducer.loggedIn,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch),
  };
}

const LogIn = (props) => {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleTextFieldChanges = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLoginAttempt = () => {
    const { actions } = props;

    actions.loginAttempt(loginInfo);
  };

  const useStyles = makeStyles({
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    grid: {},

    logInContainer: {
      width: "30vw",
    },
    logInInput: {
      margin: "3vw",
    },
  });

  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Paper className={classes.logInContainer} item xs={4}>
        <Grid
          clssName={classes.grid}
          container
          direction="column"
          justify="center"
        >
          <TextField
            className={classes.logInInput}
            id="email"
            variant="outlined"
            label="email"
            name="email"
            onChange={(e) => handleTextFieldChanges(e)}
          />
          <TextField
            className={classes.logInInput}
            id="password"
            variant="outlined"
            label="password"
            name="password"
            onChange={(e) => handleTextFieldChanges(e)}
          />
          <Button onClick={handleLoginAttempt}variant="contained" color="primary">
            Log in
          </Button>
        </Grid>
      </Paper>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
