import { Fragment, useEffect, useState } from 'react';
import {
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Container,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

export default function ListTodo() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos');
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      {''}
      <Container mt="10" maxW="container.sm">
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map(todo => (
              <Tr key={todo.todo_id}>
                <Td>{todo.todo_name}</Td>
                <Td>{todo.todo_desc}</Td>
                <Td>
                  <IconButton colorScheme="red" icon={<FaTrash />} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Fragment>
  );
}
