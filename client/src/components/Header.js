import React from 'react';
import Menu from './Menu';
import { Container } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Container maxW="container.lg">
        <Menu />
      </Container>
    </>
  );
}
