import React from 'react';
import NoImage from '../assets/nothing.svg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import ShowThumbnail from './ShowThumbnail';
import { StyledShowInfo, ShowImg } from '../styles/StyledShowInfo';

const ShowInfo = ({ show }) => (
  <StyledShowInfo backdrop={show.backdrop_path}>
    <div className='showinfo-content'>
      <div className='showinfo-thumb'>
        <ShowImg
          src={
            show.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${show.poster_path}`
              : NoImage
          }
          alt='poster'
        />
      </div>
      <div className='showinfo-text'>
        <h1>{show.name}</h1>
        <h3>Synopsys</h3>
        <p>{show.overview}</p>

        <div className='rating-director'>
          <div>
            <h3>IMDb Rating</h3>
            <div className='score'>{show.vote_average}</div>
          </div>
        </div>
      </div>
    </div>
  </StyledShowInfo>
);

export default ShowInfo;
