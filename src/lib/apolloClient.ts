import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Answer: {
        keyFields: ['id', 'text'],
      },
    },
  }),
});

export default client;
