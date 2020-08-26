import { combineReducers } from 'redux';
import { repositoriesReducer, repoSearchReducer } from './repositories';

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
  repoSearch: repoSearchReducer,
});
