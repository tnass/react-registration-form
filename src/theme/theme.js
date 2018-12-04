import React from 'react';
import {ThemeProvider} from 'styled-components';
import T from 'prop-types';

export const theme = {
  colors: {
    brand: {
      white: '#fff',
      grey: '#282c34',
      green: 'green',
      red: 'red'
    },
  },
  fontSizes: {
    large: 'calc(10px + 2vmin)'
  }
};

const DefaultThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

DefaultThemeProvider.propTypes = {
  children: T.node.isRequired,
};

export default DefaultThemeProvider;
