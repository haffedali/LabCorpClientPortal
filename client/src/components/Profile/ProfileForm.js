import React from 'react';
import { useStyles } from './ProfileForm.styles';
import {TextField, Button} from '@material-ui/core';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
    return {
      userInfo: state.loginReducer.userInfo,
    };
  }


function FormFields(props) {
  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <h2> User Profile </h2>
        <h3> Edit General Information </h3>
        <TextField
            className={classes.fieldBox}
            id="filled-required"
            label="Full Name"
            defaultValue= {props.userInfo.firstName + " " + props.userInfo.lastName}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-insurance-number"
            label="Insurance Plan"
            defaultValue= {props.userInfo.insurancePlan}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-address"
            label="Street Address"
            defaultValue= {props.userInfo.address}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-city"
            label="City"
            defaultValue= {props.userInfo.city}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-state"
            label="State"
            defaultValue= {props.userInfo.state}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            // error
            id="filled-number-zip"
            label="ZIP Code"
            defaultValue= {props.userInfo.zipCode}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-phone"
            label="Phone Number"
            defaultValue= {props.userInfo.phone}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        <TextField
            className={classes.fieldBox}
            id="filled-email"
            label="Email"
            defaultValue= {props.userInfo.email}
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
            defaultValue={props.userInfo.firstName + "." + props.userInfo.lastName}
            InputProps={{ readOnly: true, }}
            variant="filled"
        />
        {/* <TextField
            className={classes.fieldBox}
            id="filled-password-input"
            label="Password"
            type="password"
            defaultValue= {props.userInfo.contactId}
            //autoComplete="current-password"
            variant="filled"
        /> */}
      </div>
    </form>
  );
}

export default connect(mapStateToProps, {})(FormFields);
