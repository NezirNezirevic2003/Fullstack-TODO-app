import { useState } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  Button,
} from '@chakra-ui/react';

export default function AddTodo() {
  const [todo_name, setTodo_name] = useState('');
  const [todo_desc, setTodo_desc] = useState('');

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const body = { todo_name, todo_desc };
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      window.location = '/';
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  return (
    <>
      <Container mt="20" maxW="container.sm">
        <form onSubmit={onSubmit}>
          <FormControl id="text">
            <FormLabel>Todo name</FormLabel>
            <Input
              type="text"
              value={todo_name}
              onChange={e => setTodo_name(e.target.value)}
            />
            <FormHelperText>Write the name of your todo</FormHelperText>
          </FormControl>
          <FormControl mt="3" id="text">
            <FormLabel>Todo description</FormLabel>
            <Textarea
              type="text"
              value={todo_desc}
              onChange={e => setTodo_desc(e.target.value)}
            />
            <FormHelperText>
              Write the name of your todo description
            </FormHelperText>
          </FormControl>
          <Button
            size="md"
            colorScheme="whatsapp"
            width="full"
            mt="3"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}
