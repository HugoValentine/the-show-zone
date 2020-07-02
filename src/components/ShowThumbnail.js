import React from 'react';
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

export default ShowThumbnail;
