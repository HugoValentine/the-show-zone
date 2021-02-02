import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import tmdbAPI from '../api/tmdb';
import NoImage from '../assets/nothing.svg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import {
  StyledShowInfo,
  ShowImg,
  ButtonsWrapper,
} from '../styles/StyledShowInfo';
import Button from './Button';

const ShowInfo = ({ show }) => {
  const [modalOpened, setmodalOpened] = useState(false);

  let [responseData, setResponseData] = useState('');

  useEffect(() => {
    try {
      tmdbAPI.get(`/tv/${show.id}/videos?`).then((response) => {
        setResponseData(response.data.results[0]);
        console.log(response);
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <StyledShowInfo>
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
        <h3>The Synopsys</h3>
        <p>{show.overview}</p>

        <div>
          <h3>IMDb Rating: </h3>
          <div className='score'>{show.vote_average}</div>
        </div>
        <ButtonsWrapper>
          <>
            <div onClick={() => setmodalOpened(true)}>
              <Button title='Trailer' icon='play' />
            </div>
            <ModalVideo
              channel='youtube'
              isOpen={modalOpened}
              videoId={
                typeof responseData === 'undefined' ? '' : responseData.key
              }
              onClose={() => setmodalOpened(false)}
            />
          </>
        </ButtonsWrapper>
      </div>
    </StyledShowInfo>
  );
};

export default ShowInfo;
