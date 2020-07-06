import React from 'react';
import { bool, func, string } from 'prop-types';
import { StyledMenuItem } from '../styles/StyledMenuItem';

function MenuItem(props) {
  const { active, icon, title, ...otherProps } = props;
  const Icon = icon;
  return (
    <StyledMenuItem {...otherProps}>
      {/* <Icon fill={active && '#DDE2FF'} opacity={!active && '0.4'} /> */}
      {active && <div className="activeBar"></div>}
      <a className={active && 'activeTitle'}>{title}</a>
    </StyledMenuItem>
  );
}

// MenuItem.propTypes = {
//   active: bool,
//   icon: func,
//   title: string,
// };

export default MenuItem;
