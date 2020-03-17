import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://damp-crag-53639.herokuapp.com/graphql',
});

export default client;