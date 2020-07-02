import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../../config';

export const useShowFetch = (showId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    setError(false);
    setLoading(true);

    try {
      const endpoint = `${API_URL}tv/${showId}?api_key=${API_KEY}`;
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      const creditsEndpoint = `${API_URL}tv/${showId}/credits?api_key=${API_KEY}`;
      const creditsData = await (await fetch(creditsEndpoint)).json();
      console.log(creditsData);

      const directors = creditsData.crew.filter(
        (member) => member.job === 'Director'
      );
      setState({
        ...result,
        actors: creditsData.cast,
        directors,
      });
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  }, [showId]);

  useEffect(() => {
    if (localStorage[showId]) {
      setState(JSON.parse(localStorage[showId]));
      setLoading(false);
    } else {
      fetchData();
    }
  }, [fetchData, showId]);

  useEffect(() => {
    localStorage.setItem(showId, JSON.stringify(state));
  }, [showId, state]);

  return [state, loading, error];
};
