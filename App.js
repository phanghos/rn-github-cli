/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { AppNavigator } from './src/utils/router';
import { store } from './src/utils/store';
import { RepositorySearchManager } from './src/components/RepositorySearchManager';

const App = () => (
  <RepositorySearchManager>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  </RepositorySearchManager>
);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
