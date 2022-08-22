import './App.css';
import GitHubTable from './pages/GitHubTable';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
    <GitHubTable />
    </ChakraProvider>
  );
}

export default App;
