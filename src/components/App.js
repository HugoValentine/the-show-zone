import React from 'react';
import Home from './Home';
import Show from '../Show';
import NotFound from './NotFound';
import { Layout } from '../components/theme/index';
import { Router } from '@reach/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faArrowLeft,
  faArrowRight,
  faHome,
  faCalendar,
  faPoll,
  faHeart,
  faDotCircle,
  faSearch,
  faChevronRight,
  faChevronLeft,
  faLink,
  faPlay
);

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
