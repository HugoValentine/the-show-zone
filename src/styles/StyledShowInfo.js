import styled from 'styled-components';

export const StyledShowInfo = styled.div`
  width: 100%;
  max-width: 110rem;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateShowinfo 1s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 976px) {
    min-height: 250px;
    background: none;
    flex-direction: column;
  }

  .showinfo-thumb {
    min-height: 450px;
    height: 5rem;
    border-radius: 20px;
    box-shadow: 0rem 2rem 5rem ${(props) => props.theme.shadow};

    @media (max-width: 976px) {
      min-height: 300px;
      margin: 0 auto;
    }
  }

  .image-container {
    display: none;

    @media (max-width: 976px) {
      display: flex;
      justify-content: center;
      height: 5rem;
      min-height: 250px;
    }
  }

  .showinfo-text {
    max-width: 60%;
    width: 100%;
    padding: 40px;
    color: #000;

    @media (max-width: 976px) {
      padding: 10px 10px;
      border-radius: 0.8rem;
      height: 100%;
      overflow-y: auto;
      position: relative;
      max-width: 100%;
    }

    h1 {
      font-size: 48px;
      margin: 0;
      font-weight: 300;
      text-transform: uppercase;
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      color: ${(props) => props.theme.primaryDark};

      @media (max-width: 976px) {
        font-size: 25px;
      }
    }

    h3 {
      display: inline;
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
      text-transform: uppercase;
      color: ${(props) => props.theme.primary};

      @media (max-width: 976px) {
        display: inline;
        font-size: 14px;
      }
    }

    p {
      font-size: 18px;
      line-height: 26px;
      color: ${(props) => props.theme.linkColor};

      @media (max-width: 976px) {
        font-size: 13px;
        line-height: 23px;
        font-weight: 500;
      }
    }
  }

  .score {
    display: inline;
    color: #f5de50;
    font-weight: 900;
    border-radius: 25px;
    margin: 0px 0 0 0;
    padding-left: 0.5rem;

    @media (max-width: 976px) {
      display: inline;
      margin-top: 0.5rem;
      font-size: 15px;
    }
  }

  @keyframes animateShowinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2rem;
`;

export const ShowImg = styled.img`
  height: 100%;
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
`;
