import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";

import App from './App';
import { ThemeProvider } from "./theme/ThemeContext";
import { history } from './navigation'
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig'

import { ApolloProvider } from "react-apollo";
import graphqlClient from "./microservices-api/graphqlClient"

import store from './store'
const DO_NOT_LOGIN = false;

runWithAdal(authContext, () => {
  ReactDOM.render((
    <Provider store={store}>
      <ApolloProvider client={graphqlClient}>
        <Router history={history}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </Router>
      </ApolloProvider>
    </Provider>
  ), document.getElementById('root'));

}, DO_NOT_LOGIN)