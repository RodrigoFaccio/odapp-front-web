import styled from 'styled-components';

export const InputStyled = styled.input<{width?:string}>`
width:${props=>props.width?props.width:'100%'};
border: 2px solid #ddd;
border-radius: 4px;
padding-top: 10px;
padding-bottom: 10px;

    &:focus{
        border: 2px solid #308AA2;
        outline: none;
    }
  
`;
export const DivInput = styled.div<{width?:string}>`
   width:${props=>props.width?props.width:'100%'};

    display: flex;
    flex-direction: column; 
`;
export const Label = styled.p`
    padding: 0;
    margin-bottom: 5px;
    color:#308AA2;
    font-weight: 600;
    max-width: 20px;
  font-family: 'Poppins', sans-serif;

`;
