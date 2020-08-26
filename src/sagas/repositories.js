import {takeEvery, call, put, delay} from 'redux-saga/effects';
import {REPOS_REQUEST, REPOS_SUCCESS} from '../actions/repositories';

const repoMock = require('./repositoriesMock.json');

function* getUserRepositories(action) {
  try {
    // const response = yield call(
    //   apiService.fetchUserRepositories,
    //   action.payload.user,
    // );
    // yield put({type: REPOS_SUCCESS, payload: {repositories: response.data}});
    yield delay(1500);
    yield put({type: REPOS_SUCCESS, payload: {repositories: repoMock}});
  } catch (error) {
    console.log('Error', error);
  }
}

export function* watchRepositories() {
  yield takeEvery(REPOS_REQUEST, getUserRepositories);
}
