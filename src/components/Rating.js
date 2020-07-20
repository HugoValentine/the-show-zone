import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarsWrapper = styled(StarRatings)`
  starRatingsStyle[style] {
    display: flex !important;
  }
`;

const Rating = ({ number }) => {
  return <StarsWrapper rating={number} starDimension="20px" />;
};

export default Rating;
