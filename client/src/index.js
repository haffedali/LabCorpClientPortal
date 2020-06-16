import React from 'react';
import ReactDOM from 'react-dom';
import  configureStore  from './services/store';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';

import App from './App';

import { ThemeProvider } from "./theme/ThemeContext";
import { Router } from "react-router-dom";
import { history } from './navigation'

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
      <HashRouter>
        <ThemeProvider>
          <Router history={history}>
            <App />
          </Router>
        </ThemeProvider>
      </HashRouter>
  </Provider>

), document.getElementById('root'));
