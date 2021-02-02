import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Global, Theme } from './globals';

export const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global />
      {children}
    </ThemeProvider>
  );
};
