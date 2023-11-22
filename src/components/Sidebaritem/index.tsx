import React from 'react'
import { Container } from './styles';
interface ISideProps{
    Icon:any;
    text:string;
}
const SidebarItem = ({text,Icon }:ISideProps) => {
  return (
    <Container>
      <Icon />
      {text}
    </Container>
  )
}

export default SidebarItem