import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import { services_uri } from './services_uri';

export const cache = new InMemoryCache();
//    uri: process.env.REACT_APP_SERVICES_URI || services_uri,

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    credentials: "include",
    uri: services_uri,
  })
});

export default client;