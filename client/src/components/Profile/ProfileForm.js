import React, { useState } from 'react';
import { useStyles } from './ProfileForm.styles';
import * as profileActions from '../../services/Profile/actions';
import {TextField, Button} from '@material-ui/core';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

function mapStateToProps(state) {
    return {
      userInfo: state.loginReducer.userInfo,
    };
  }

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch),
  };
}

const ProfileForm = (props) => {
  const [profileInfo, setCurrentUserInfo] = useState({
    phone: props.userInfo.phone,
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setCurrentUserInfo({ ...profileInfo, [name]: value });
  };

  const classes = useStyles(props);
  const [value, setValue] = React.useState(0);
  
  return (
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <h2> User Profile </h2>
          <h3> Edit General Information </h3>
          <TextField
              className={classes.fieldBox}
              id="contactFullName"
              label="Full Name"
              defaultValue= {props.userInfo.firstName + " " + props.userInfo.lastName}
              InputProps={{ readOnly: true, }}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactInsNum"
              label="Insurance Plan"
              defaultValue= {props.userInfo.insurancePlan}
              InputProps={{ readOnly: true, }}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactAddrStreet"
              name="address"
              label="Street Address"
              defaultValue= {props.userInfo.address}
              // InputProps={{ readOnly: true, }}
              onChange={(e) => handleInfoChange(e)}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactAddrCity"
              name="city"
              label="City"
              defaultValue= {props.userInfo.city}
              // InputProps={{ readOnly: true, }}
              onChange={(e) => handleInfoChange(e)}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactAddrState"
              name="state"
              label="State"
              defaultValue= {props.userInfo.state}
              // InputProps={{ readOnly: true, }}
              onChange={(e) => handleInfoChange(e)}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactAddrZip"
              name="zipCode"
              label="ZIP Code"
              defaultValue= {props.userInfo.zipCode}
              // InputProps={{ readOnly: true, }}
              onChange={(e) => handleInfoChange(e)}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactPhone"
              name= "phone"
              label="Phone Number"
              defaultValue= {props.userInfo.phone}
              // InputProps={{ readOnly: true, }}
              onChange={(e) => handleInfoChange(e)}
              variant="filled"
          />
          <TextField
              className={classes.fieldBox}
              id="contactEmail"
              label="Email"
              defaultValue= {props.userInfo.email}
              InputProps={{ readOnly: true, }}
              variant="filled"
          />
          <Button
            className={classes.button}
            // disable={buttonDisabled}
            variant="filled"
            onClick={(e) => {
              e.preventDefault()
              props.actions.updateProfile(profileInfo)
            }}
          >
                Update Information
          </Button>
          <h3> Your Login Credentials </h3>
          <TextField
              className={classes.fieldBox}
              id="contactLoginUsername"
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
          <button type="submit">Update Password</button>
        </div>
      </form>
    );
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
