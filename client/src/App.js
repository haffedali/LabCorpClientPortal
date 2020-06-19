import React from 'react';
import { connect } from 'react-redux';
import { SideBar } from './components'
import { LogIn } from './pages';

// NOTE: Run "npm run noauth" to avoid login
const requireLogin = (no_auth) => {
  return no_auth === "true" ? undefined : true;
}

const App = (props) => 
  <div>{props.loggedIn === requireLogin(process.env.REACT_APP_NOAUTH)
    ? <SideBar /> 
    : <LogIn />
  }</div>

const mapStateToProps = (state) => {
  return {loggedIn: state.loginReducer.loggedIn};
}

export default connect(mapStateToProps, {})(App);
