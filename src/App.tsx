import './App.css';
import GitHubTable from './pages/GitHubTable';
import { ChakraProvider } from '@chakra-ui/react';
import { ApolloProvider} from '@apollo/client';
import {useEffect, useState} from 'react';
import {IRepository} from './models/repository';
import client from './graphQL/client';
import {getRepos} from './graphQL/queries';
import {paginationConfig} from './pages/GitHubTable/GitHubTable.config'

// TODO: remove console.logs; check instructions once again -> write about loader/spinner and about env.variables, tests etc
function App() {

  const [repositories, setRepositories] = useState<IRepository[]>([]);

  useEffect(() => {  
    getRepos(paginationConfig.itemPerPage).then(response => {
      const { data } = response;
      setRepositories(data.user?.repositories?.nodes);
    });
  }, []);
  
  return (
    <ApolloProvider client={client}>
    <ChakraProvider>
    <GitHubTable repositories={repositories} />
    </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
