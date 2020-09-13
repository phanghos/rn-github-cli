import { createContext, useContext } from 'react';

const lightTheme = {
  text: '#000',
  background: '#fff',
};

const darkTheme = {
  text: '#fff',
  background: '#000',
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const ThemeContext = createContext(themes.light);

export const useThemeContext = () => useContext(ThemeContext);
