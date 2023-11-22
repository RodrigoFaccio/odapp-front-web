import styled from 'styled-components';
import { IButton } from '.';

export const Container = styled.button<IButton>`
cursor: pointer;
display: flex;
  background-color: red;
  border: none;
  border-radius: 4px;
  background-color: ${props=>props.type==='primary'?'#308AA2':'red'};
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  font-size: 16px;
  padding: 10px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;

`;
