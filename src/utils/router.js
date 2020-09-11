import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-navigation';
import { useDispatch } from 'react-redux';
import {
  RepositoriesScreen,
  RepositoryScreen,
  CommitsScreen,
  PullRequestListScreen,
  PullRequestScreen,
  RepositorySearchScreen,
  IssuesScreen,
  LoginScreen,
} from '../screens';
import { SearchBar } from '../components/SearchBar';
import { REPOS_SEARCH_REQUEST } from '../actions/repositories';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Repositories"
          component={RepositoriesScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Repository"
          component={RepositoryScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Commits"
          component={CommitsScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Pull Requests"
          component={PullRequestListScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Pull Request"
          component={PullRequestScreen}
          options={{ headerBackTitleVisible: false }}
        />
        <AppStack.Screen
          name="RepositorySearch"
          component={RepositorySearchScreen}
          options={{
            headerTitle: () => {
              const onSubmit = query => {
                dispatch({ type: REPOS_SEARCH_REQUEST, payload: { query } });
              };
              return <SearchBar onSubmit={onSubmit} />;
            },
            headerBackTitleVisible: false,
            headerTitleContainerStyle: { flex: 1 },
          }}
        />
        <AppStack.Screen
          name="Issues"
          component={IssuesScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </AppStack.Navigator>
    </SafeAreaView>
  );
};
