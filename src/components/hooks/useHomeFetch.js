import { useState, useEffect } from 'react';
import { SEARCH_POPULAR } from '../../config';

export const useHomeFetch = () => {
  const [state, setState] = useState({ shows: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchShows = async (endpoint) => {
    setError(false);
    setLoading(true);

    const isLoadingMore = endpoint.search('page');

    try {
      // 2 awaits because I first await the fetch itself and then await when parsed to json because that's also async
      const data = await (await fetch(endpoint)).json();
      setState((prev) => ({
        ...prev,
        shows:
          isLoadingMore !== -1
            ? // append the new shows and keep the old ones in the state, otherwise wipe them and only show the new ones
              [...prev.shows, ...data.results]
            : [...data.results],
        heroImage: prev.heroImage || data.results[0],
        currentPage: data.page,
        totalPages: data.total_pages,
      }));
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  //https://api.themoviedb.org/3/tv/popular?api_key=603f922cff9526b02ebc5063f7284be7
  useEffect(() => {
    fetchShows(SEARCH_POPULAR);
  }, []);

  return [{ state, loading, error }, fetchShows];
};
