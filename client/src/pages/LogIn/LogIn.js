import React, { useState, useEffect } from "react";
import { useTheme } from '../../theme/ThemeContext';
import { useMutation } from "@apollo/react-hooks";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSession } from '../../services/Session/actions';
import { loginAttempt } from '../../services/LogIn/actions';

import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from '../../assets/img/logo.png';
import { useStyles } from './LogIn.styles';

import { createSession } from '../../utils/mutations';

const LogIn = (props) => {
  const classes = useStyles(props);
  const theme = useTheme();

  const { onChangeToSignUp: pushChangeToSignUp } = props;

  const [authError, setAuthError] = useState();

  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();
  const [createUserSession] = useMutation(createSession);

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const {
        data: { createUserSession: createdSession }
      } = await createUserSession({ variables: { email, password } });
      
      dispatch(setSession(createdSession));
      dispatch(loginAttempt(createdSession.user.contactId));
    } catch (e) {
      console.log(e.message);
      setAuthError(e.message.split(':')[1]);
    }
  });

  useEffect(() => {
    theme.restoreDefaultTheme();
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container className={classes.container}>
        
        <form onSubmit={onSubmit} className={classes.childToCenter}>
          <Paper className={classes.logInContainer} item xs={4}>
            <Grid
              className={classes.grid}
              container
              direction="column"
              justify="center"
            >
              <Grid item className={classes.logoContainer}>
                <img src={logo} height="75rem" width="75rem" />
              </Grid>
              <div className={classes.authError}>{authError}</div>
                <TextField
                  className={classes.logInInput}
                  id="email"
                  variant="outlined"
                  label="Email"
                  name="email"
                  type="email"
                  inputRef={register}
                  disabled={isSubmitting}
                />
                <TextField
                  className={classes.logInInput}
                  id="password"
                  variant="outlined"
                  label="Password"
                  name="password"
                  type="password"
                  inputRef={register}
                  disabled={isSubmitting}
                />
                <Button
                  className={classes.logInButton}
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Log in
                </Button>
            </Grid>
          </Paper>
          </form>
          <div className={classes.signUpButton}>
            <Button onClick={evt => {
              evt.preventDefault();
              pushChangeToSignUp();
            }}>
              Register
            </Button>
          </div>
      </Container>
    </div>
  );
};

export default LogIn;