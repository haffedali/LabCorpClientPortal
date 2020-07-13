import {
  LOGIN_FAILED,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import { loginApi } from "../../utils";


export const loginAttempt = (userInfo) => {
  return (dispatch) => {
    dispatch(_loginStarted());

    loginApi
      .isValidUser(userInfo.username, userInfo.password)
      .then((r) => {
        if (r.data.value.length){
          const user = r.data.value[0]
          dispatch(_loginSuccess(user))
        }else{
          dispatch(_loginFailed());
        }
      })
      .catch((e) => console.log(e));
  };
};

export const logoutAttempt = () => {
  return (dispatch) => {
    dispatch(_logout());
  };
};

//For now we are not returned data on Success, but we will need to in the future

const _loginSuccess = (userInfo) => {
  if (userInfo.ss_contact_ss_insuranceplan_Patient[0].ss_name){
    return {
      type: LOGIN_SUCCESS,
      userInfo: {
        firstName: userInfo.firstname,
        lastName: userInfo.lastname,
        contactId: userInfo.contactid,
        address: userInfo.address1_line1,
        city: userInfo.address1_city,
        state: userInfo.address1_stateorprovince,
        zipCode: userInfo.address1_postalcode,
        phone: userInfo.mobilephone,
        email: userInfo.emailaddress1,
        userPassword: userInfo.ss_patientid,
        insurancePlan: userInfo.ss_contact_ss_insuranceplan_Patient[0].ss_name
      },
  }
  }
  else{
    return {
      type: LOGIN_SUCCESS,
      userInfo: {
        firstName: userInfo.firstname,
        lastName: userInfo.lastname,
        contactId: userInfo.contactid,
        address: userInfo.address1_line1,
        city: userInfo.address1_city,
        state: userInfo.address1_stateorprovince,
        phone: userInfo.mobilephone,
        zipCode: userInfo.postalcode,
        email: userInfo.emailaddress1,
      },
  }
};
}
const _loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

const _loginStarted = () => {
  return {
    type: LOGIN_PENDING,
  };
};

const _logout = () => {
  return {
    type: LOGOUT,
  };
};
