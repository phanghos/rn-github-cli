import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-navigation';
import {
  RepositoriesScreen,
  RepositoryScreen,
  CommitsScreen,
  PullRequestListScreen,
  PullRequestScreen,
  RepositorySearchScreen,
  IssuesScreen,
  LoginScreen,
  ProfileScreen,
  SettingsScreen,
} from '@screens';
import { RepositorySearchBar } from '@screens/RepositorySearchScreen/components/RepositorySearchBar/RepositorySearchBar';
import { ThemeContext } from '@context/ThemeContext';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
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
            headerTitle: () => <RepositorySearchBar />,
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
        <AppStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <AppStack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerBackTitleVisible: false,
            headerStyle: { backgroundColor: theme.background },
            headerTitleStyle: { color: theme.text },
          }}
        />
      </AppStack.Navigator>
    </SafeAreaView>
  );
};
