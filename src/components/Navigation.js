import React from 'react';
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

export default Navigation;
