import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  height: 35px;
  align-items: center;
  cursor: pointer;
  display: flex;
  /* border: ${(props) => {
    if (props.selected) {
      return ' border: 1px solid black;';
    }
  }}; */
  margin-left: ${(props) => (props.selected ? '5px' : '0')};

  /* color: #a4a6b3; */
  a {
    width: 100%;
    vertical-align: top;
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    text-decoration: none;
    outline: none;
    color: ${(props) => (props.selected ? 'black' : '#808080')};
    padding: 8px 20px;
  }

  a:hover {
    opacity: ${(props) => (props.selected ? '1' : '.6')};
  }

   .activebar {
    border: 1px solid black;
    height: 30px;
  } 

  .activeContainer {
    background-color: 'rgba(221;226;255)';
  }

  .activeTitle {
    color: black;
  }
`;
