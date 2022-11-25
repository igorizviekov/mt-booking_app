import React from 'react';

export const ThemeContext = React.createContext({
  darkTheme: false,
  setDarkTheme: (...args: any) => {},
});
