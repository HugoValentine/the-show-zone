import styled from 'styled-components';

export const StyledSearchBar = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding-top: 20px;
  margin-right: 50px;

  @media only screen and (max-width: 768px) {
    display: grid;
  }
`;

export const StyledSearchBarContent = styled.div`
  .search-box {
    border: solid 3px black;
    display: inline-block;
    position: relative;
    border-radius: 40px;
    input[type='text'] {
      font-family: Raleway, sans-serif;
      font-size: 20px;
      font-weight: bold;
      width: 20px;
      height: 30px;
      padding: 5px 20px 5px 10px;
      border: none;
      box-sizing: border-box;
      border-radius: 50px;
      transition: width 500ms cubic-bezier(0.5, -0.5, 0.5, 0.5);
      &:focus {
        outline: none;
      }
      &:focus,
      &:not(:placeholder-shown) {
        width: 250px;
        transition: width 500ms cubic-bezier(0.5, -0.5, 0.5, 1.5);
        + span {
          bottom: 13px;
          right: 10px;
          transition: bottom 300ms ease-out 800ms, right 300ms ease-out 800ms;
        }
        + span:after {
          top: 0;
          right: 10px;
          opacity: 1;
          transition: top 300ms ease-out 1100ms, right 300ms ease-out 1100ms,
            opacity 300ms ease 1100ms;
        }
      }
    }
    span {
      width: 20px;
      height: 13px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: -13px;
      right: -15px;
      transition: bottom 300ms ease-out 300ms, right 300ms ease-out 300ms;
      &:before,
      &:after {
        content: '';
        height: 25px;
        border-left: solid 3px black;
        position: absolute;
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
        opacity: 0;
        top: -20px;
        right: -10px;
        transition: top 300ms ease-out, right 300ms ease-out,
          opacity 300ms ease-out;
      }
    }
  }
`;
