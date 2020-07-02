import React from 'react';
import Navigation from './components/Navigation';
import ShowInfo from './components/ShowInfo';
import ShowInfoBar from './components/ShowInfoBar';
import Actors from './components/Actors';
import Grid from './components/Grid';
import Spinner from './components/Spinner';
import { useShowFetch } from './components/hooks/useShowFetch';

const Show = ({ showId }) => {
  const [show, loading, error] = useShowFetch(showId);
  console.log('Show:', show);

  return (
    <>
      <Navigation />
      <ShowInfo />
      <ShowInfoBar />
      <Grid>
        <Actors />
      </Grid>
      <Spinner />
    </>
  );
};

export default Show;
