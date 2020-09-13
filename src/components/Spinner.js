import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useThemeContext } from '@context/ThemeContext';

export const Spinner = () => {
  const { theme } = useThemeContext();

  return (
    <ActivityIndicator
      size="large"
      color="#f00"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.background,
      }}
    />
  );
};
