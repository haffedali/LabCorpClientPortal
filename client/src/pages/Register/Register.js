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
import { useStyles } from './Register.styles';
import { useLocation } from 'react-router-dom';

import { createUser } from '../../utils/mutations';

const Register = ({ onChangeToLogin: pushChangeToLogin }, props) => {
  const classes = useStyles(props);
  const theme = useTheme();
  const location = useLocation();
  const contactId = location.search.replace('?contactId=', '');

  const [authError, setAuthError] = useState();

  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
    handleSubmit,
    register
  } = useForm();
  
  const [createNewUser] = useMutation(createUser);

  const onSubmit = handleSubmit(async ({ contactId, firstName, lastName, email, password }) => {
    try {
      console.log(contactId, firstName, lastName, email, password)
      const {
        data: { createNewUser: newUser }
      } = await createNewUser({ variables: { contactId, firstName, lastName, email, password } });
      
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
                  id="contactId"
                  variant="outlined"
                  label="Contact ID"
                  name="contactId"
                  inputRef={register}
                  disabled={true}
                  defaultValue={contactId}
                />
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
                  id="firstName"
                  variant="outlined"
                  label="First Name"
                  name="firstName"
                  inputRef={register}
                  disabled={isSubmitting}
                />
                <TextField
                  className={classes.logInInput}
                  id="lastName"
                  variant="outlined"
                  label="Last Name"
                  name="lastName"
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
              pushChangeToLogin();
            }}>
              Login
            </Button>
          </div>
      </Container>
    </div>
  );
};

export default Register;