import styled from 'styled-components';

export const Container = styled.div<{sidebar:boolean}>`
  background-color: #ffff;
  height: 100%;
  border: 1px solid #43D9E7;
  width: ${props=>!props.sidebar?'90px':'300px'};
  animation: showSidebar 1s;

  > svg {
    position: fixed;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    color: #43D9E7;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;