import React from 'react';
import { ActivityIndicator } from 'react-native';

export const Spinner = () => {
  return (
    <ActivityIndicator
      size="large"
      color="#f00"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}
    />
  );
};
