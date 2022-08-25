import { ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { onError} from '@apollo/client/link/error';
import { setContext } from '@apollo/client/link/context';

const errorLink = onError((errors: any) => { // TODO: use errorLink, improve types
    if (errors.graphqlErrors) {
      errors.graphqlErrors.map(({message, location}: {message: string, location: string}) => {
        console.error(`GraphQl error, ${message} at ${location}`);
      });
    }
  });
  
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GITHUB_URL,
  });
  
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      }
    }
  });
  
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  export default client;