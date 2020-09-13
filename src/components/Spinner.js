import React, { useContext } from 'react';
import { ActivityIndicator } from 'react-native';
import { ThemeContext } from '@context/ThemeContext';

export const Spinner = () => {
  const { theme } = useContext(ThemeContext);

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
