import styled from 'styled-components';

export const StyledNavigation = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  background: #fff;
  color: #fff;
  box-shadow: 0rem 0rem 0.1rem rgba(0, 0, 0, 0.2);

  .navigation-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;

    p {
      font-size: 22px;
      float: left;
      color: #37474f;
      padding-right: 10px;
      text-decoration: none;

      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
