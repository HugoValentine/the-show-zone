import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyle } from '../styles/GlobalStyle';
import Home from './Home';
import Show from '../Show';
import NotFound from './NotFound';

const App = () => (
  <>
    <Router>
      <Home path="/" />
      <Show path="/:showId" />
      <NotFound default />
    </Router>
    <GlobalStyle />
  </>
);

export default App;
