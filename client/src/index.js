import React from 'react';
import ReactDOM from 'react-dom';
import  configureStore  from './services/store';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";

import App from './App';
import { ThemeProvider } from "./theme/ThemeContext";
import { history } from './navigation'

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
), document.getElementById('root'));