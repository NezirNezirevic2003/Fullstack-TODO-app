import React from 'react';
import Menu from './Menu';
import { Container } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';

export default function Header() {
  return (
    <>
      <Container maxW="container.lg">
        <ColorModeSwitcher />
        <Menu />
      </Container>
    </>
  );
}
