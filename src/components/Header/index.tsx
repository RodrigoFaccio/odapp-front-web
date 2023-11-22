import React from 'react';
import { Container } from './styles';
//@ts-ignore
import logo from '../../assets/odapp5.png'
function Header() {
  return (
    <Container>
        <img src={logo}/>
    </Container>
  );
}

export default Header;
