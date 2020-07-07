import React, { useEffect } from 'react';
import { useStyles } from './ProfileForm.styles';
import { TextField } from '@material-ui/core';

import { useSelector, useDispatch } from "react-redux";
import { loginAttempt } from '../../services/LogIn/actions';

function FormFields(props) {
  const classes = useStyles(props);
  const dispatch = useDispatch();


  const userInfo = useSelector(state => state.session.user);

  const insurancePlan = useSelector(state => state.loginReducer.userInfo ? state.loginReducer.userInfo.insurancePlan : '')

    useEffect(() => {
        dispatch(loginAttempt(userInfo.contactId));
    }, []);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h2> User Profile </h2>
        <h3> Edit General Information </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-required"
            label="Full Name"
            defaultValue= {userInfo.firstName + " " + userInfo.lastName}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Plan"
            defaultValue={insurancePlan || null}
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
            error
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
            id="filled-email"
            label="Email"
            defaultValue= {userInfo.email}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        {/* <h3> Insurance Information </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Name"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Plan"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Policy Number"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Group Number"
            variant="filled"
        /> */}
        <h3> Your Login Credentials </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-read-only-input"
            label="Username"
            defaultValue={userInfo.firstName + "." + userInfo.lastName}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        {/* <TextField
            className={classes.fieldBox}
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue= {userInfo.contactId}
            //autoComplete="current-password"
            variant="filled"
        /> */}
      </div>
    </form>
  );
}

export default FormFields;
