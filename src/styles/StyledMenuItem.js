import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  height: 35px;
  display: block;
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
    border-radius: 30px;
    border: 1px solid transparent;
    padding: 8px 20px;
    opacity: 0.6;
  }

  a:hover {
    /* background-color: rgba(221, 226, 255, 0.4); */
    border-radius: 2rem;
    border: 1px solid #546e7a;
    padding: 8px 20px;
    opacity: 0.6;
  }

  .activeBar {
    border-radius: 30px;
    border: 1px solid black;
    margin-left: 5px;
    height: 30px;
    background-color: #dde2ff;

    a {
      color: red;
    }
  }
  .activeContainer {
    background-color: 'rgba(221;226;255)';
  }
  .activeTitle {
    /* color: #000000; */
    color: red;
  }
`;
