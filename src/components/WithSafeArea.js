import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';

export const withSafeArea = (Component, forceInset) => ({...props}) => {
  return (
    <SafeAreaView style={styles.container} forceInset={forceInset}>
      <Component {...props} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
