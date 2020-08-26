import {fork} from 'redux-saga/effects';
import {watchRepositories, watchRepositoriesSearch} from './repositories';

export default function* rootSaga() {
  yield fork(watchRepositories);
  yield fork(watchRepositoriesSearch);
}
