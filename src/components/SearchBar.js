import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styles/StyledSearchBar';
import { Component } from 'react';

class SearchBar extends React.Component {
  state = { inputValue: '' };
  timeOut = null;

  search = (event) => {
    const { callback } = this.props;
    const { value } = event.target;

    this.setState({ inputValue: value });
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      const { inputValue } = this.state;
      callback(inputValue);
    }, 500);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <StyledSearchBar>
        <StyledSearchBarContent>
          <div className="search-box">
            <FontAwesome className="fa-search" name="search" size="2x" />
            <input
              type="text"
              placeholder="Search"
              onChange={this.search}
              value={inputValue}
            />
          </div>
        </StyledSearchBarContent>
      </StyledSearchBar>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
