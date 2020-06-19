import React from 'react';
import { useStyles } from './ProfileForm.styles';
// import TextField from '@material-ui/core/TextField';
import {TextField, Button} from '@material-ui/core';


import { connect } from "react-redux";
import { bindActionCreators } from "redux";

export default function FormFields(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h2> User Profile </h2>
        <h3> Edit General Information </h3>
        <TextField
            className={classes.fieldBox}
            required
            id="filled-required"
            label="Full Name"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-address"
            label="Preferred Name"
            defaultValue="Preferred Dummy Name"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-address"
            label="Street Address"
            defaultValue="Dummy Address"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-city"
            label="City"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            // error
            className={classes.fieldBox}
            id="filled-state"
            label="State"
            defaultValue="Dummy Data"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-number-zip"
            label="ZIP Code"
            type="number"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-phone"
            label="Phone Number"
            type="number"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-email"
            label="Email"
            variant="filled"
        />
        <h3> Insurance Information </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Name"
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Plan Type"
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
        />
        <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="outlined"
        />
        <h3> Your Login Credentials </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-read-only-input"
            label="Username"
            defaultValue="Dummy Data Username"
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
        />
      </div>
    </form>
  );
}
