import React, { useEffect, useState } from 'react';
import { useStyles } from './ProfileForm.styles';
import { TextField } from '@material-ui/core';

import { useSelector, useDispatch } from "react-redux";
// import { updateAttempt } from '../../services/Profile/actions';

import { useMutation } from "@apollo/react-hooks";
import gql from "graphql-tag"
import { useForm } from "react-hook-form";
import { setSession } from '../../services/Session/actions';
import { loginAttempt } from '../../services/LogIn/actions';

const mutation = gql`
  mutation($email: String!, $password: String!) {
    updateUserPassword(email: $email, password: $password) {
      id
      user {
        contactId
        email
        id
        firstName
        lastName
      }
    }
  }
`;

function FormFields(props) {
  const dispatch = useDispatch();

    const classes = useStyles(props);
    const {
        formState: { isSubmitting },
        handleSubmit,
        register
      } = useForm();


      const {
        firstName, 
        lastName,
        email,
      } = useSelector(state => state.session.user)

    const userInfo = useSelector(state => state.loginReducer.userInfo);
    const sessionUser = useSelector(state => state.session.user)

    const [updateUserPassword] = useMutation(mutation);

    const onSubmit = handleSubmit(async ({ email, password }) => {
        console.log(email, password, firstName)
        try {
          const {
            data: { updateUserPassword: createdSession }
          } = await updateUserPassword({ variables: { email, password } });
          
          dispatch(setSession(createdSession));
          dispatch(loginAttempt(createdSession.user.contactId));
        } catch (e) {
          console.log(e.message);
        }
      });

  return (
    <form onSubmit={onSubmit} className={classes.root} noValidate autoComplete="off">
      <div>
        <h2> User Profile </h2>
        <h3> Edit General Information </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-required"
            label="Full Name"
            defaultValue= {firstName + " " + lastName}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Plan"
            defaultValue={userInfo.insurancePlan || null}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-address"
            label="Street Address"
            defaultValue= {userInfo.address}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-city"
            label="City"
            defaultValue= {userInfo.city}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-state"
            label="State"
            defaultValue= {userInfo.state}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            // error
            id="filled-number-zip"
            label="ZIP Code"
            defaultValue= {userInfo.zipCode}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-phone"
            label="Phone Number"
            defaultValue= {userInfo.phone}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            inputRef={register}
            id="email"
            label="Email"
            name="email"
            defaultValue={sessionUser.email}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <h3> Your Login Credentials </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-read-only-input"
            label="Username"
            defaultValue={userInfo.firstName + "." + userInfo.lastName}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="password"
            label="Password"
            type="password"
            name="password"
            inputRef={register}
            variant="filled"
        />
        <button type="submit">Update Password</button>
      </div>
    </form>
  );
}

export default FormFields;
