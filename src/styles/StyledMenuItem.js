import styled from 'styled-components';

export const StyledMenuItem = styled.div`
  .activeBar {
    height: 55;
    width: 5;
    background-color: '#DDE2FF';
    position: 'absolute';
    left: 0;
  }
  .activeContainer {
    background-color: 'rgba(221;226;255)';
  }
  .activeTitle {
    color: '#00000';
  }
  .container {
    height: 55;
    cursor: 'pointer';
    padding-left: 32;
    padding-right: 32;
  }
  :hover {
    background-color: 'rgba(221;226;255; 0.40)';
  }

  .title {
    font-family: 'Muli';
    font-size: 16;
    line-height: '20px';
    letter-spacing: '0.5px';
    color: '#A4A6B3';
    margin-left: 24;
  }
`;
