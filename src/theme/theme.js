import React from 'react';
import {ThemeProvider} from 'styled-components';
import T from 'prop-types';

export const theme = {
  colors: {
    brand: {
      white: '#fff',
      darkGrey: '#282c34',
    }
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