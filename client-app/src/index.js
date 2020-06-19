import "@babel/polyfill";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { Provider } from "react-redux";

import graphqlClient from "#root/api/graphqlClient"
import Root from "#root/components/Root";

import store from "./store";

render(
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <Root />
    </ApolloProvider>
  </Provider>, 
  document.getElementById("app"));