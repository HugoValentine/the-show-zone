import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledContainer,
  StyledGrid,
  StyledGridContent,
} from '../styles/StyledGrid';
import { StyledSidebar } from '../styles/StyledSidebar';
import MenuItem from './MenuItem';

const Grid = ({ header, children }) => (
  <StyledContainer>
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  </StyledContainer>
);

Grid.propTypes = {
  header: PropTypes.string,
};

export default Grid;
