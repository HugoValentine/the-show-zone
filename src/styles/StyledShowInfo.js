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

    @media (max-width: 976px) {
      min-height: 250px;
      background: none;
    }
  }

  .showinfo-thumb {
    height: 100%;
    object-fit: cover;
    align-content: center;
    border-radius: 0.8rem;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
    transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);
    float: left;

    @media (max-width: 976px) {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  .image-container {
    display: none;
    @media (max-width: 976px) {
      display: block;
      display: flex;
      justify-content: center;
      height: 5rem;
      min-height: 250px;
    }
  }

  .showinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    @media (max-width: 976px) {
      padding: 10px 10px;
      background: rgb(0, 0, 0, 0.7);
      border-radius: 0.8rem;
      /* width: 20rem;
      margin: 20px 20px; */
    }

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media (max-width: 976px) {
        font-size: 26px;
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

      @media (max-width: 976px) {
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
      }
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;

    @media (max-width: 976px) {
      display: none;
    }
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

    @media (max-width: 976px) {
      display: none;
    }
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
