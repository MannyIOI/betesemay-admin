import React from 'react';

import './App.css';
// import "mdbreact/dist/css/mdb.css";
// import "mdbreact/dist/css/style.css";
import Router from "./routers";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient"

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
