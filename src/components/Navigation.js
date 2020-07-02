import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import { StyledNavigation } from '../styles/StyledNavigation';

const Navigation = ({ show }) => (
  <StyledNavigation>
    <div className="navigation-content">
      <Link to="/">
        <p>Home</p>
      </Link>
      <p>|</p>
      <p>{show}</p>
    </div>
  </StyledNavigation>
);

Navigation.propTypes = {
  show: PropTypes.string,
};

export default Navigation;
