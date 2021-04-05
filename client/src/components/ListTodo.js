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
import EditTodo from './EditTodo';

export default function ListTodo() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async id => {
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {
        method: 'DELETE',
      });
      console.log(deleteTodo);
      window.location = '/';
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

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
              <Th textAlign="center">Name</Th>
              <Th textAlign="center">Description</Th>
              <Th textAlign="center">Update</Th>
              <Th textAlign="center">Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {todos.map(todo => (
              <Tr key={todo.todo_id}>
                <Td textAlign="center">{todo.todo_name}</Td>
                <Td textAlign="center">{todo.todo_desc}</Td>
                <Td textAlign="center">
                  <EditTodo todo={todo} />
                </Td>
                <Td textAlign="center">
                  <IconButton
                    onClick={() => deleteTodo(todo.todo_id)}
                    colorScheme="red"
                    icon={<FaTrash />}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Container>
    </Fragment>
  );
}
