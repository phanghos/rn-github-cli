import React, { useContext } from 'react';
import { SafeAreaView } from 'react-navigation';
import { ThemeContext } from '@context/ThemeContext';

export const withSafeArea = (Component, forceInset) => ({ ...props }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme.background }}
      forceInset={forceInset}>
      <Component {...props} />
    </SafeAreaView>
  );
};
