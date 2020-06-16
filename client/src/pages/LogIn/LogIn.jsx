import React, { useState } from "react";
import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as loginActions from "../../services/LogIn/actions";
import { useTheme } from "../../theme/ThemeContext";
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

  const classes = useStyles(props);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        <div className={classes.childToCenter}>
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
              <Button
                className={classes.logInButton}
                onClick={handleLoginAttempt}
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
