import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  StyledGrid,
  StyledGridContent,
  StyledSidebar,
} from '../styles/StyledGrid';
import MenuItem from './MenuItem';

const Grid = ({ header, children }) => (
  <Container>
    <StyledSidebar>
      <h3>Popular</h3>
      <h3>Popular</h3>
      <h3>Popular</h3>
      <h3>Popular</h3>
    </StyledSidebar>
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  </Container>
);

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
