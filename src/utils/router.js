import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RepositoriesScreen} from '../screens';
import {withSafeArea} from '../components';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Repositories"
        component={withSafeArea(RepositoriesScreen, {
          top: 'never',
          bottom: 'always',
        })}
        options={{
          headerStyle: {
            //   shadowColor: 'transparent',
          },
        }}
      />
    </AppStack.Navigator>
  );
};
