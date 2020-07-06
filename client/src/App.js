import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dashboard } from './components'
// For microservices
import gql from "graphql-tag";
import graphqlClient from "./utils/graphqlClient";
import { setSession } from './services/Session/actions';
import { loginAttempt } from './services/LogIn/actions';

const query = gql`
  {
    userSession(me: true) {
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

const App = () => {
  const dispatch = useDispatch();
  const [initialised, setInitialised] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatch(setSession(data.userSession));
        dispatch(loginAttempt(data.userSession.user.contactId));
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