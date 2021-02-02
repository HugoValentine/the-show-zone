import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import LazyLoad from 'react-lazyload';
import Rating from './Rating';

import {
  StyledShowThumbnail,
  DetailsWrapper,
  RatingsWrapper,
  Tooltip,
  MovieWrapper,
  MovieImg,
  Title,
} from '../styles/StyledShowThumbnail';

const ShowThumbnail = ({ image, show, showId, clickable }) => (
  <LazyLoad height={200} offset={100}>
    <MovieWrapper>
      {clickable ? (
        // Sending the showId as a parameter
        <Link to={`/${showId}`}>
          <MovieImg className='Clickable' src={image} alt='ShowThumbnail' />
        </Link>
      ) : (
        <MovieImg src={image} alt='ShowThumbnail' />
      )}
      {
        <DetailsWrapper>
          <Title>{show.name}</Title>
          <RatingsWrapper>
            <Rating number={show.vote_average / 2} />
            <Tooltip>
              {show.vote_average} average rating on {show.vote_count} votes
            </Tooltip>
          </RatingsWrapper>
        </DetailsWrapper>
      }
    </MovieWrapper>
  </LazyLoad>
);

ShowThumbnail.propTypes = {
  image: PropTypes.string,
  showId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default ShowThumbnail;
