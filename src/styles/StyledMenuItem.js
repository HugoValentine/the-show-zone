import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  height: 35px;
  align-items: center;
  cursor: pointer;
  display: flex;

  /* color: #a4a6b3; */

  a {
    width: 100%;
    vertical-align: top;
    font-family: Montserrat, sans-serif;
    font-size: 12px;
    text-decoration: none;
    outline: none;
    color: #808080;
    padding: 8px 20px;
  }

  a:hover {
    border: 1px solid transparent;
    opacity: 0.6;
  }

  .activeBar {
    border: 1px solid black;
    margin-left: 5px;
    height: 30px;
  }

  .activeContainer {
    background-color: 'rgba(221;226;255)';
  }

  .activeTitle {
    color: black;
  }
`;
