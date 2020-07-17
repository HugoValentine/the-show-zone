import styled from 'styled-components';

export const StyledShowThumbnail = styled.div`
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 10px;
    align-content: center;

    :hover {
      opacity: 0.9;
    }

    .title {
      margin: 20px 30px !important;
      font-size: 16px;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;

export const MovieWrapper = styled.div`
  width: 100%;
  height: auto;
  object-fit: cover;
  align-content: center;
  flex-direction: column;
  text-decoration: none;
  background-color: transparent;
  border-radius: 0.8rem;
  transition: all 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);

  &:hover {
    transform: scale(1.03);

    ::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0.8rem;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: #37474f;
    z-index: -99;
    box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.25);
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

export const MovieImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.8rem;
  box-shadow: 0rem 2rem 5rem rgba(0, 0, 0, 0.2);
  transition: all 100ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${MovieWrapper}:hover & {
    border-radius: 0.8rem 0.8rem 0rem 0rem;
    box-shadow: none;
  }
`;
export const Title = styled.h2`
  text-align: center;
  font-size: 1.3rem;
  font-weight: 400;
  color: #546e7a;
  margin-bottom: 1rem;
  line-height: 1.4;
  transition: color 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  ${MovieWrapper}:hover & {
    color: white;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
`;

export const RatingsWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #37474f;

  ${MovieWrapper}:hover & {
    color: #b0bec5;
    /* primary-ligher */
  }

  @media (max-width: 500px) {
    margin-right: 5px;
  }
`;

export const Tooltip = styled.span`
  visibility: hidden;
  opacity: 0;
  width: 120px;
  font-weight: 500;
  font-size: 1.1rem;
  background-color: lightblue;
  color: black;
  text-align: center;
  border-radius: 6px;
  padding: 1rem;
  position: absolute;
  z-index: 999;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
  transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    transition: all 200ms cubic-bezier(0.645, 0.045, 0.355, 1);
    border-color: white transparent transparent transparent;
  }

  ${RatingsWrapper}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;
