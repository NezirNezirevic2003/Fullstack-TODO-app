import { Button, IconButton } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { useDisclosure } from '@chakra-ui/hooks';
import { Input } from '@chakra-ui/input';
import { Container } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Textarea } from '@chakra-ui/textarea';
import React, { useState, Fragment } from 'react';
import { FaPen } from 'react-icons/fa';

export default function EditTodo({ todo }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [todo_name, setTodo_name] = useState(todo.todo_name);
  const [todo_desc, setTodo_desc] = useState(todo.todo_desc);

  const updateTodo = async e => {
    e.preventDefault();
    try {
      const body = { todo_name, todo_desc };
      // eslint-disable-next-line no-unused-vars
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`,
        {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      window.location = '/';
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };

  return (
    <Fragment>
      <IconButton
        icon={<FaPen />}
        color="white"
        colorScheme="blue"
        onClick={onOpen}
      />
      <Container maxW="container.lg">
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          size="md"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">Update todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Todo name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="todo name"
                  value={todo_name}
                  onChange={e => setTodo_name(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Todo description</FormLabel>
                <Textarea
                  placeholder="Todo description"
                  value={todo_desc}
                  onChange={e => setTodo_desc(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                width="full"
                colorScheme="whatsapp"
                mr={3}
                onClick={e => updateTodo(e)}
              >
                Update
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Fragment>
  );
}
