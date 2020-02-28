import React from 'react';
import './App.css';
import Router from "./routers";

import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient"

console.log()

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
