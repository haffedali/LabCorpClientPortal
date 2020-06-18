import {
  LOGIN_FAILED,
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
import { loginApi } from "../../utils";

////////TESTING PURPOSES
const dummyUser = {
  email: "test@gmail.com",
  password: "1234",
};

export const loginAttempt = (userInfo) => {
  return (dispatch) => {
    dispatch(_loginStarted());

    // const user = await loginApi.isValidUserTest(userInfo)

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
  return {
    type: LOGIN_SUCCESS,
    userInfo: {
      firstName: userInfo.firstname,
      lastName: userInfo.lastname,
      contactId: userInfo.contactid,
    },
  };
};

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
