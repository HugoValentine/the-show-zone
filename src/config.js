const API_URL = 'https://api.themoviedb.org/3/';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_ENDPOINT = `${API_URL}search/tv?api_key=${API_KEY}&query=`;
const SEARCH_POPULAR = `${API_URL}tv/popular?api_key=${API_KEY}`;
const SEARCH_BY_GENRE = `${API_URL}discover/tv?api_key=${API_KEY}&with_genres=`;

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';
// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

// http://image.tmdb.org/t/p/w500/6t6r1VGQTTQecN4V0sZeqsmdU9g.jpg

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  SEARCH_ENDPOINT,
  SEARCH_POPULAR,
  SEARCH_BY_GENRE,
  BACKDROP_SIZE,
  POSTER_SIZE,
};
