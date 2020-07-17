import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';

export const StyledShowInfo = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateShowinfo 1s;

  .showinfo-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;
    position: relative;
    height: 5rem;
  }

  .showinfo-thumb {
    height: 100%;
    object-fit: cover;
    align-content: center;
    flex-direction: column;
    border-radius: 0.8rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .showinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px !important;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
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

export const ShowImg = styled.img`
  height: 100%;
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
`;
