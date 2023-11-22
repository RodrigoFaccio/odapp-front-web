import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 90%;
  border-collapse: collapse;
  font-family: 'Poppins', sans-serif;

  

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    color:#308AA2;

  }
  
   td:last-child {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  th {
    background-color: #f2f2f2;
    color:#308AA2
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  button {
    padding: 6px 10px;
    margin-right: 5px;
  }
`;
