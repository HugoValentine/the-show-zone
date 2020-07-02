import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { StyledShowThumbnail } from '../styles/StyledShowThumbnail';

const ShowThumbnail = ({ image, showId, clickable }) => (
  <StyledShowThumbnail>
    {clickable ? (
      // Sending the showId as a parameter
      <Link to={`/${showId}`}>
        <img className="Clickable" src={image} alt="ShowThumbnail" />
      </Link>
    ) : (
      <img src={image} alt="ShowThumbnail" />
    )}
  </StyledShowThumbnail>
);

ShowThumbnail.propTypes = {
  image: PropTypes.string,
  showId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default ShowThumbnail;
