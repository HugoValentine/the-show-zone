import React, { useState } from 'react';
import {
  SEARCH_ENDPOINT,
  SEARCH_POPULAR,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from '../config';
import HeroImage from './HeroImage';
import Grid from './Grid';
import ShowThumbnail from './ShowThumbnail';
import Spinner from './Spinner';
import LoadMore from './LoadMore';
import NoImage from '../assets/no-image.png';
import { useHomeFetch } from './hooks/useHomeFetch';
import SearchBar from './SearchBar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
    {
      state: { shows, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchShows,
  ] = useHomeFetch(searchTerm);

  const searchShows = (search) => {
    const endpoint = search ? SEARCH_ENDPOINT + search : SEARCH_POPULAR;
    setSearchTerm(search);
    fetchShows(endpoint);
  };

  const loadMoreShows = () => {
    const searchEndpoint = `${SEARCH_ENDPOINT}${searchTerm}&page=${
      currentPage + 1
    }`;
    const popularEndpoint = `${SEARCH_POPULAR}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchShows(endpoint);
  };

  if (error) return <div>Something went wrong...</div>;
  if (!shows[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_name}
        text={heroImage.overview}
      />
      <SearchBar callback={searchShows} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Shows'}>
        {shows.map((show) => (
          <ShowThumbnail
            key={show.id}
            clickable
            image={
              show.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${show.poster_path}`
                : NoImage
            }
            showId={show.id}
            showName={show.original_name}
          />
        ))}
      </Grid>

      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMore text="Load More" callback={loadMoreShows} />
      )}
    </>
  );
};

export default Home;
