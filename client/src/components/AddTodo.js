import React from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Textarea,
  IconButton,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';

export default function AddTodo() {
  return (
    <>
      <Container mt="20" maxW="container.sm">
        <FormControl id="text">
          <FormLabel>Todo name</FormLabel>
          <Input type="text" />
          <FormHelperText>Write the name of your todo</FormHelperText>
        </FormControl>
        <FormControl mt="3" id="text">
          <FormLabel>Todo description</FormLabel>
          <Textarea type="text" />
          <FormHelperText>
            Write the name of your todo description
          </FormHelperText>
        </FormControl>
        <IconButton
          mt="3"
          width="full"
          colorScheme="whatsapp"
          aria-label="submit"
          size="md"
          icon={<FaPlus />}
        />
      </Container>
    </>
  );
}
