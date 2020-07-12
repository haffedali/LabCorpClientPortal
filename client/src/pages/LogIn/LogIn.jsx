import React, { useState, useEffect } from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../services/LogIn/actions";
import { loginApi } from "../../utils";
import logo from "../../assets/img/logo.png";
import { useStyles } from "./LogIn.styles";

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
    username: props.username,
    password: "",
  });

  const handleTextFieldChanges = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLoginAttempt = (firstName, lastName) => {
    loginApi.isValidUser(firstName, lastName);
    const { actions } = props;

    actions.loginAttempt(loginInfo);
  };

  useEffect(() => {
    // NOTE: For development only. Needed to auto log in when app started w/ 'npm run noauth'
    process.env.REACT_APP_NOAUTH === 'true' ? 
      handleLoginAttempt(props.username, '') : 
      console.log('Login required. Delete me during production!')
  }, []);

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <div className={classes.childToCenter}>
          <Paper className={classes.logInContainer} item xs={4}>
            <Grid
              className={classes.grid}
              container
              direction="column"
              justify="center"
            >
              <Grid item className={classes.logoContainer}>
                <img src={logo} height="75rem" width="95rem" />
              </Grid>

              <TextField
                className={classes.logInInput}
                id="username"
                variant="outlined"
                label="username"
                name="username"
                onChange={(e) => handleTextFieldChanges(e)}
              />
              <TextField
                className={classes.logInInput}
                id="ID-number"
                variant="outlined"
                label="ID number"
                name="ID number"
                onChange={(e) => handleTextFieldChanges(e)}
              />
              <Button
                className={classes.logInButton}
                onClick={() =>
                  handleLoginAttempt(loginInfo.username, loginInfo.password)
                }
                variant="contained"
                color="primary"
              >
                Log in
              </Button>
            </Grid>
          </Paper>
        </div>
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
