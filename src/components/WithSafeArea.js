import React from 'react';
import { SafeAreaView } from 'react-navigation';
import { useThemeContext } from '@context/ThemeContext';

export const withSafeArea = (Component, forceInset) => ({ ...props }) => {
  const { theme } = useThemeContext();

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.background }}
      forceInset={forceInset}>
      <Component {...props} />
    </SafeAreaView>
  );
};
