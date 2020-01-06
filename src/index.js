import React from "react";
import ReactDOM from "react-dom";
import "./custom.scss";
import "./index.css";
import App from "./app/App";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import gql from "graphql-tag";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();
const httpLink = new createHttpLink({
  uri: "https://api.yelp.com/v3/graphql"
});

console.log(httpLink);

const client = new ApolloClient({
  cache,
  link: httpLink,
  fetchOptions: {
    mode: "no-cors"
  }
});

client
  .query({
    query: gql`
      {
        search(term: "cafe", location: "seattle") {
          business {
            name
            rating
            location {
              address1
              city
              state
              country
            }
          }
        }
      }
    `
  })
  .then(result => console.log(result))
  .catch(err => console.log(err));

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
