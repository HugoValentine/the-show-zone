import { createGlobalStyle } from 'styled-components';

export const Theme = {
  white: '#fff',
  ghostWhite: '#c6c6cc',
  text: '#fafafa',
  primary: '#37474f',
  primaryDark: '#263238',
  linkColor: '#444444',
  shadow: 'rgba(0,0,0,0.25)',
};

export const Global = createGlobalStyle`

  :root {
    --font-sans: -apple-system, BlinkMacSystemFont, 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
  }

  html,
  body {
    font-family: "SF Pro Display","Montserrat", "sans-serif","SF Pro Icons","Helvetica Neue","Helvetica","Arial";
    font-size: 16px;
    background-color: #fff;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
`;
