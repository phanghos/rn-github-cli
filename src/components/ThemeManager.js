import React, { useState } from 'react';
import { ThemeContext, themes } from '@context/ThemeContext';

export const ThemeManager = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
