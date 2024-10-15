import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Create an HTTP link to the Hashnode GraphQL API
const httpLink = createHttpLink({
  uri: 'https://gql.hashnode.com',
});

// Set the authorization header
const authLink = setContext((_, { headers }) => {
  const token = "735d6b2b-a17b-4994-bda7-0892597fd486";
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
