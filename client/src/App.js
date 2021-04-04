import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import ListTodo from './components/ListTodo';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <AddTodo />
      <ListTodo />
    </ChakraProvider>
  );
}

export default App;
