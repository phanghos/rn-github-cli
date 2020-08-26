import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  RepositoriesScreen,
  CommitsScreen,
  PullRequestsScreen,
} from '../screens';
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
      <AppStack.Screen
        name="Commits"
        component={CommitsScreen}
        options={{headerBackTitleVisible: false}}
      />
      <AppStack.Screen
        name="Pull Requests"
        component={withSafeArea(PullRequestsScreen, {
          top: 'never',
          bottom: 'always',
        })}
        options={{headerBackTitleVisible: false}}
      />
    </AppStack.Navigator>
  );
};
