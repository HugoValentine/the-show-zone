import React from 'react';

//import Logo from './Logo';
import { StyledSidebar } from '../styles/StyledSidebar';
import MenuItem from './MenuItem';

function Sidebar(props) {
  return (
    <StyledSidebar>
      {/* <Logo /> */}
      <div>
        <MenuItem
          title="Popular"
          onClick={() => props.onChange('Popular')}
          active={props.selectedItem === 'Popular'}
        />
        <MenuItem
          title="Action & Adventure"
          onClick={() => props.onChange('Action & Adventure')}
          active={props.selectedItem === 'Action & Adventure'}
        />
        <MenuItem
          title="Animation"
          onClick={() => props.onChange('Animation')}
          active={props.selectedItem === 'Animation'}
        />
        <MenuItem
          title="Comedy"
          onClick={() => props.onChange('Comedy')}
          active={props.selectedItem === 'Comedy'}
        />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
