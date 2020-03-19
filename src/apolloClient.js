import ApolloClient, { InMemoryCache } from 'apollo-boost';
require("dotenv").config()
console.log(process.env.REACT_APP_SERVER_ADDRESS+'/graphql')
const defaultOptions = {
  query: {
    fetchPolicy: "no-cache"
  },
  mutate: {
    errorPolicy: "all"
  }
};

const client = new ApolloClient({
  defaultOptions,
  uri: process.env.REACT_APP_SERVER_ADDRESS+'/graphql',
  cache: new InMemoryCache()
});

export default client;