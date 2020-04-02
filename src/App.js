import React from 'react';

import './App.css';
import Router from "./routers";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./globalStyles";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apolloClient"

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Router />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
