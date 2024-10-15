import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://gql.hashnode.com',
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.HASHNODE_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

// Create the Apollo Client
export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
