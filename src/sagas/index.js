import {fork} from 'redux-saga/effects';
import {watchRepositories} from './repositories';

export default function* rootSaga() {
  yield fork(watchRepositories);
}
