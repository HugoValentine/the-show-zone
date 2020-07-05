import React from 'react';
import { bool, func, string } from 'prop-types';
import { StyledMenuItem } from '../styles/StyledMenuItem';

function MenuItem(props) {
  const { active, icon, title, ...otherProps } = props;
  const Icon = icon;
  return (
    // <Row
    //   className={css(styles.container, active && styles.activeContainer)}
    //   vertical="center"
    //   {...otherProps}
    // >
    //   {active && <div className={css(styles.activeBar)}></div>}
    //   {/* <Icon fill={active && '#DDE2FF'} opacity={!active && '0.4'} /> */}
    //   <span className={css(styles.title, active && styles.activeTitle)}>
    //     {title}
    //   </span>
    // </Row>

    <StyledMenuItem>
      <div className="container active activeContainer" {...otherProps}></div>
      {active && <div className="activeBar"></div>}
      {/* <Icon fill={active && '#DDE2FF'} opacity={!active && '0.4'} /> */}
      <span className="title">{title}</span>
    </StyledMenuItem>
  );
}

// MenuItem.propTypes = {
//   active: bool,
//   icon: func,
//   title: string,
// };

export default MenuItem;
