import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Dashboard } from './components'
import gql from "graphql-tag";
import graphqlClient from "./utils/graphqlClient";
import { setSession } from './services/Session/actions';
import { loginAttempt } from './services/LogIn/actions';

import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  spinnerContainer: {
    width: '100%',
    height: '100ch',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30ch'
  },
  spinner: {
    color: theme.HIGHLIGHT,
  }
}));

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
  const classes = useStyles();
  
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

  if (!initialised) return (
    <div className={classes.spinnerContainer}>
      <CircularProgress className={classes.spinner}/> 
    </div>
  );

  return (
    <Dashboard />
  );
};

export default App;