import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledButton = styled.button`
  display: flex;
  flex-direction: ${(props) => (props.left ? 'row' : 'row-reverse')};
  align-items: center;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  line-height: 1;
  font-weight: 500;
  font-size: 15px;
  width: auto;
  flex-grow: 0;
  color: ${(props) =>
    props.solid ? props.theme.text : props.theme.primaryDark};
  border: ${(props) =>
    props.solid
      ? '1px solid transparent'
      : `1px solid ${props.theme.primaryDark}`};
  background-color: ${(props) =>
    props.solid ? props.theme.primaryDark : 'transparent'};
  border-radius: 5rem;
  box-shadow: ${(props) =>
    props.solid ? `0 1rem 5rem ${props.theme.shadow}` : 'none'};
  transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);

  @media (max-width: 976px) {
    padding: 0.5rem 1rem;
    font-size: 12px;
  }
`;

const Button = ({ title, solid, icon, left }) => {
  return (
    <StyledButton left={left ? 1 : 0} solid={solid ? 1 : 0}>
      <FontAwesomeIcon
        icon={icon}
        size='1x'
        style={left ? { marginRight: '10px' } : { marginLeft: '10px' }}
      />
      {title}
    </StyledButton>
  );
};

export default Button;
