import styled from 'styled-components';

export const StyledActor = styled.div`
  color: #fff;
  background: #1c1c1c;
  border-radius: 20px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;

    @media (max-width: 976px) {
      height: 200px;
    }

    /* iPhone X
    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      
    } */
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;

    @media (max-width: 976px) {
      font-size: 14px;
      padding-bottom: 5px;
    }
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;

    @media (max-width: 976px) {
      font-size: 12px;
      margin: 0;
      padding-bottom: 0px;
    }
  }
`;
