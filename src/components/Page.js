import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Page = ({ children, withPadding, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});
