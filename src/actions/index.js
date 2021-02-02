import tmdbAPI from '../api/tmdb';
import axios from 'axios';

export const getShow = () => {
  axios
    .get(
      'https://api.themoviedb.org/3/tv/85271/videos?api_key=603f922cff9526b02ebc5063f7284be7'
    )
    .then((response) => {
      console.log(response.data);
    });
};

export const getTrailer = (id) => {
  tmdbAPI.get(`/tv/${id}/videos?`).then((response) => response.data.results[0]);
};
