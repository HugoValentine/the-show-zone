import React from 'react';
import NoImage from '../assets/no-image.png';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import ShowThumbnail from './ShowThumbnail';
import { StyledShowInfo } from '../styles/StyledShowInfo';

const ShowInfo = ({ show }) => (
  <StyledShowInfo backdrop={show.backdrop_path}>
    <div className="showinfo-content">
      <div className="showinfo-thumb">
        <ShowThumbnail
          image={
            show.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${show.poster_path}`
              : NoImage
          }
          clickable={false}
        />
      </div>
      <div className="showinfo-text">
        <h1>{show.name}</h1>
        <h3>Synopsys</h3>
        <p>{show.overview}</p>

        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{show.vote_average}</div>
          </div>
        </div>

        <div className="director">
          <h3>DIRECTOR{show.directors.length > 1 ? 'S' : ''}</h3>
        </div>
      </div>
    </div>
  </StyledShowInfo>
);

export default ShowInfo;
