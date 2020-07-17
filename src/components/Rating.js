import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StarsWrapper = styled(StarRatings)`
  line-height: 1;
`;

const Rating = ({ number }) => {
  return (
    <StarsWrapper rating={number} starDimension="20px" numberOfStars={5} />
  );
};

export default Rating;
