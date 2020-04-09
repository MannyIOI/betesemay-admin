import ApolloClient from 'apollo-boost';
require("dotenv").config()
console.log(process.env.REACT_APP_SERVER_ADDRESS+'/graphql')
const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
  },
  query: {
    fetchPolicy: 'cache-and-network',
  }
};

const client = new ApolloClient({
  fetchOptions: defaultOptions,
  uri: process.env.REACT_APP_SERVER_ADDRESS+'/graphql'
});

export default client;