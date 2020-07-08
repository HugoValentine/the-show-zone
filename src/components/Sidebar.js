import React from 'react';

//import Logo from './Logo';
import { StyledSidebar } from '../styles/StyledSidebar';
import MenuItem from './MenuItem';
import Genres from './Genres';

function createMenuItem(genre, selected, setisOpened) {
  return (
    <MenuItem
      title={genre.name}
      id={genre.id}
      key={genre.id}
      onClick={setisOpened ? () => setisOpened(false) : null}
      selected={genre.name === selected ? true : false}
    />
  );
}

function Sidebar(selected) {
  // const { selectedItem, onChange } = props;

  return <StyledSidebar>{Genres.map(createMenuItem)}</StyledSidebar>;
}

export default Sidebar;
