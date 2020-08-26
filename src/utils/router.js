import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  RepositoriesScreen,
  CommitsScreen,
  PullRequestsScreen,
  PullRequestScreen,
  RepositorySearchScreen,
} from '../screens';
import {SearchBar} from '../components/SearchBar';
import {useDispatch} from 'react-redux';
import {REPOS_SEARCH_REQUEST} from '../actions/repositories';
import {withSafeArea} from '../components';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  const dispatch = useDispatch();

  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Repositories"
        component={withSafeArea(RepositoriesScreen, {
          top: 'never',
          bottom: 'always',
        })}
        options={({navigation}) => ({
          headerStyle: {
            //   shadowColor: 'transparent',
          },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('RepositorySearch');
              }}>
              <Icon
                name="search"
                size={16}
                color="#4997d0"
                style={{marginRight: 16}}
              />
            </TouchableOpacity>
          ),
        })}
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
      <AppStack.Screen
        name="Pull Request"
        component={withSafeArea(PullRequestScreen, {bottom: 'always'})}
        options={{headerBackTitleVisible: false}}
      />
      <AppStack.Screen
        name="RepositorySearch"
        component={withSafeArea(RepositorySearchScreen)}
        options={{
          headerTitle: () => {
            const onSubmit = (query) => {
              dispatch({type: REPOS_SEARCH_REQUEST, payload: {query}});
            };
            return <SearchBar onSubmit={onSubmit} />;
          },
          headerBackTitleVisible: false,
          headerTitleContainerStyle: {flex: 1},
        }}
      />
    </AppStack.Navigator>
  );
};
