import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';
import Header from './Header';

function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Home/>
    </ChakraProvider>
  );
}

export default App;
