import ApolloClient from 'apollo-boost';
require("dotenv").config()
console.log(process.env.REACT_APP_SERVER_ADDRESS+'/graphql')
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
  mutate: {
    fetchPolicy: "network-only",
    errorPolicy: "all"
  }
};

const client = new ApolloClient({
  defaultOptions,
  uri: process.env.REACT_APP_SERVER_ADDRESS+'/graphql'
});

export default client;