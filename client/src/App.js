import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <AddTodo />
    </ChakraProvider>
  );
}

export default App;
