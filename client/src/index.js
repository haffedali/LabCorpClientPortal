import React from 'react';
import ReactDOM from 'react-dom';
import  configureStore  from './services/store';
import { Provider } from 'react-redux';

import {HashRouter } from 'react-router-dom';

import App from './App';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
  </Provider>

), document.getElementById('root'));