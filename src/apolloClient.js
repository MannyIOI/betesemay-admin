import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://localhost:4000/graphql',
});

export default client;