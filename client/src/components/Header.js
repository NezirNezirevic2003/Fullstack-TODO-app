import React from 'react';
import { Container } from '@chakra-ui/react';
import ColorModeSwitcher from '../ColorModeSwitcher';
import Logo from './Logo';

export default function Header() {
  return (
    <>
      <Container mt="2" maxW="container.lg">
        <Logo />
        <ColorModeSwitcher />
      </Container>
    </>
  );
}
