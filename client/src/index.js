import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import { runWithAdal } from 'react-adal';

import { authContext } from './adalConfig';
import App from './App';
import { ApolloProvider } from "react-apollo";
import configureStore from './services/store';
import graphqlClient from "./utils/graphqlClient";
import { history } from './navigation';
import { ThemeProvider } from "./theme/ThemeContext";

const DO_NOT_LOGIN = false;

const store = configureStore();

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

}, DO_NOT_LOGIN);