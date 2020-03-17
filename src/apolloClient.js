import ApolloClient from 'apollo-boost';
require("dotenv").config()
console.log(process.env.REACT_APP_SERVER_ADDRESS+'/graphql')
const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_ADDRESS+'/graphql',
});

export default client;