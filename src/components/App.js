import React from 'react';
import { Router } from '@reach/router';
// import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from '../components/theme/index';
import Home from './Home';
import Show from '../Show';
import NotFound from './NotFound';

const App = () => (
  <>
    <Layout>
      <Router>
        <Home path='/' />
        <Show path='/:showId' />
        <NotFound default />
      </Router>
    </Layout>
  </>
);

export default App;
