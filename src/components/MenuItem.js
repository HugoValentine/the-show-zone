import React from 'react';
import { bool, func, string } from 'prop-types';
import { StyledMenuItem } from '../styles/StyledMenuItem';

function MenuItem({ title, selected, id }) {
  return (
    <StyledMenuItem selected={selected}>
      {/* <Icon fill={active && '#DDE2FF'} opacity={!active && '0.4'} /> */}
      {selected && <div className="activebar"></div>}
      <a>{title}</a>
    </StyledMenuItem>
  );
}

export default MenuItem;
