import React from 'react';
import {ThemeProvider} from 'styled-components';
import T from 'prop-types';

export const theme = {
  colors: {
    brand: {
      white: '#fff',
      grey: '#282c34',
      lightGrey: '#f3f3f3',
      green: '#20bf55',
      red: '#ff0022'
    },
  },
  fontSizes: {
    medium: '14px',
    large: '20px'
  }
};

const DefaultThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

DefaultThemeProvider.propTypes = {
  children: T.node.isRequired,
};

export default DefaultThemeProvider;
