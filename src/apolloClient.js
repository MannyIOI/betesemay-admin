import ApolloClient from 'apollo-boost';
require("dotenv").config()
console.log(process.env.REACT_APP_SERVER_ADDRESS+'/graphql')
const defaultOptions = {
  query: {
    fetchPolicy: "network-only"
  },
  mutate: {
    errorPolicy: "all"
  }
};

const client = new ApolloClient({
  defaultOptions,
  uri: process.env.REACT_APP_SERVER_ADDRESS+'/graphql'
});

export default client;