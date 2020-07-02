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

  if (error) return <div>Something went wrong, it's not you, it's me</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation show={show.original_name} />
      <ShowInfo show={show} />
      <ShowInfoBar />
      <Grid>
        <Actors />
      </Grid>
    </>
  );
};

export default Show;
