import { Container, Grid, Paper, TextField, Button } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import logo from '../../assets/img/logo.png';

import { useMutation } from "@apollo/react-hooks";
import React from "react";
import {useForm} from "react-hook-form";
import { useStyles } from './Register.styles';

import { createUserMutation } from '../../utils/mutations';

const Register = (props) => {
  const classes = useStyles(props);
  const { onChangeToLogin: pushChangeToLogin, contactId } = props;

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
    reset
  } = useForm();
  
  const [createUser] = useMutation(createUserMutation);

  const onSubmit = handleSubmit(async ({ contactId, firstName, lastName, email, password }) => {
    await createUser({ variables: { contactId, firstName, lastName, email, password } });
    reset();
    pushChangeToLogin();
  });

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
                <TextField
                  className={classes.logInInput}
                  id="contactId"
                  variant="outlined"
                  label="Registration Key"
                  name="contactId"
                  inputRef={register}
                  disabled={contactId || false}
                  defaultValue={contactId || ''}
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
                <TextField 
                  className={classes.logInInput}
                  id="confirmPassword"
                  variant="outlined"
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  inputRed={register}
                />
                <Button
                  className={classes.logInButton}
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                >
                  Register
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