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
import { RepositorySearchManager } from '@components';
import { ThemeManager } from '@components/ThemeManager';
import { AppNavigator } from './src/utils/router';
import { store } from './src/utils/store';

const App = () => (
  <ThemeManager>
    <RepositorySearchManager>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </RepositorySearchManager>
  </ThemeManager>
);

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
