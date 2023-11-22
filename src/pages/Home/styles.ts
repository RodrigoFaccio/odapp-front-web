import styled from 'styled-components';

export const Container = styled.div`
display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  flex-direction: column;
`;
export const ActionsView = styled.div`
    display: flex;
    height: 50px;
  width: 90%;
  justify-content: end;
  align-items: center;
  margin-top: 10px;
`;


export const ContainerSide = styled.div`
   display: flex;
   width: 100%;
   flex-direction: row;
   justify-content: start;
   align-items: start;
   height: 100vh;
   overflow-x: hidden; /* Bloqueia o scroll horizontal */
`;


