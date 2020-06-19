// import React from 'react';
// import { connect } from 'react-redux';
// import { SideBar } from './components'
// import { LogIn } from './pages';

// NOTE: Run "npm run noauth" to avoid login
// const requireLogin = (no_auth) => {
//   return no_auth === "true" ? undefined : true;
// }

// const App = (props) => 
//   <div>{props.loggedIn === requireLogin(process.env.REACT_APP_NOAUTH)
//     ? <SideBar /> 
//     : <LogIn />
//   }</div>

// const mapStateToProps = (state) => {
//   return {loggedIn: state.loginReducer.loggedIn};
// }

// export default connect(mapStateToProps, {})(App);

import gql from "graphql-tag";
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import graphqlClient from "./microservices-api/graphqlClient";
import { setSession } from "./store/ducks/session";

import { Dashboard } from './components'

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        email
        id
      }
    }
  }
`;

const App = () => {
  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
      }
      setInitialised(true);
    });
  }, []);

  if (!initialised) return "Loading...";

  return (
    <Dashboard />
  );
};

export default App;