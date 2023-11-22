import React, { ReactNode } from 'react';
import { Container } from './styles';

export interface IButton {
  children:ReactNode;
  type:'primary'|'delete',
  dataCy?:string;
  onClick:()=>void;
  
}

function Button({children,type,dataCy,onClick}:IButton) {
  return (
    <Container data-cy={dataCy} onClick={onClick} type={type}>
       {children}
    </Container>
  );
}

export default Button;
