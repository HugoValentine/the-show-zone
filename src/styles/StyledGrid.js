import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  /* max-width: 1900px; */
`;

export const StyledGrid = styled.div`
  margin: 0 50px;
  padding: 0 20px;
  h1 {
    font-family: Montserrat, sans-serif;
    font-size: 42px;

    @media only screen and (max-width: 768px) {
      font-size: 22px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0px;
    padding-top: 12px;
  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(10px, 1fr));
  grid-gap: 70px;
  /* position: relative; */

  .grid-element {
    animation: animateGrid 0.5s;
  }

  @keyframes animateGrid {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(100px, 1fr));
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }

  /* @media screen and (max-width: 375px) {
    grid-template-columns: repeat(1, 1fr);
  } */
`;
