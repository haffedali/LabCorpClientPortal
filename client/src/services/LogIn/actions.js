import { LOGIN_FAILED, LOGIN_PENDING, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

////////TESTING PURPOSES
const dummyUser = {
  email: "test@gmail.com",
  password: "1234",
};

export const loginAttempt = (userInfo) => {
    return dispatch => {
        dispatch(_loginStarted());

        if (userInfo.email === dummyUser.email && userInfo.password === dummyUser.password){
            return dispatch(_loginSuccess(userInfo))
        }
        else {
            return dispatch(_loginFailed())
        }
    }
};

export const logoutAttempt = () => {
  return dispatch => {
    dispatch(_logout());
  }
}

//For now we are not returned data on Success, but we will need to in the future

const _loginSuccess = (userInfo) => {
  return {
    type: LOGIN_SUCCESS,
    userInfo
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
    type: LOGOUT
  }
}
