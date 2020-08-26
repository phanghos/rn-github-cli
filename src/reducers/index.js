import {combineReducers} from 'redux';
import {repositoriesReducer} from './repositories';

export const rootReducer = combineReducers({
  repositories: repositoriesReducer,
});
