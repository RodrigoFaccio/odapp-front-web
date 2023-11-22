import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
    border: 1px solid #43D9E7;
  font-family: 'Poppins', sans-serif;

  font-size: 20px;
  color: #43D9E7;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: #008DA6;
    color: white;
  }
`;