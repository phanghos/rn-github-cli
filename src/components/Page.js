import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useThemeContext } from '@context/ThemeContext';

export const Page = ({ children, style }) => {
  const { theme } = useThemeContext();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.background }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
