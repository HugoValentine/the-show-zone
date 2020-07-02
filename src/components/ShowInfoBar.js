import React from 'react';
import FontAwesome from 'react-fontawesome';
import { convertTime, convertMoney } from '../helpers';

import { StyledShowInfoBar } from '../styles/StyledShowInfoBar';

const ShowInfoBar = ({ time, budget, revenue }) => (
  <StyledShowInfoBar>
    <div className="showinfo-content">
      <div className="showinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="showinfobar-info">
          Running time: {convertTime(time)}
        </span>
      </div>

      <div className="showinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="showinfobar-info">Budget: {convertMoney(budget)}</span>
      </div>

      <div className="showinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="showinfobar-info">
          Revenue: {convertMoney(revenue)}
        </span>
      </div>
    </div>
  </StyledShowInfoBar>
);

export default ShowInfoBar;
