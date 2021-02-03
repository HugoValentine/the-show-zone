import styled from 'styled-components';

export const StyledLoadMore = styled.button`
  background: #000;
  width: 25%;
  min-width: 200px;
  height: 70px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 40px;
  font-size: 28px;
  max-width: 1280px;
  display: block;
  margin: 20px auto;
  padding: 0 20px;
  outline: none;

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 976px) {
    height: 50px;
    font-size: 15px;
    min-width: 200px;
    background: ${(props) => props.theme.primary};
    margin-top: 2rem;
  }
`;
