import { takeEvery, call, put, delay } from 'redux-saga/effects';
import {
  REPOS_REQUEST,
  REPOS_SUCCESS,
  REPOS_SEARCH_REQUEST,
  REPOS_SEARCH_SUCCESS,
} from '../actions/repositories';
import { apiService } from '../api/ApiService';

const repoMock = require('../mocks/repositoriesMock.json');
const repoSearchMock = require('../mocks/repoSearchMock.json');

function* getUserRepositories(action) {
  try {
    // const response = yield call(
    //   apiService.fetchUserRepositories,
    //   action.payload.user,
    // );
    // yield put({type: REPOS_SUCCESS, payload: {repositories: response.data}});
    yield delay(1500);
    yield put({ type: REPOS_SUCCESS, payload: { repositories: repoMock } });
  } catch (error) {
    console.error('Error', error);
  }
}

function* searchRepositories(action) {
  try {
    // const response = yield call(
    //   apiService.searchRepositories,
    //   action.payload.query,
    // );
    // yield put({
    //   type: REPOS_SEARCH_SUCCESS,
    //   payload: {repositories: response.data},
    // });
    yield delay(1500);
    yield put({
      type: REPOS_SEARCH_SUCCESS,
      payload: { repositories: repoSearchMock.items },
    });
  } catch (error) {
    console.error('Error', error);
  }
}

export function* watchRepositories() {
  yield takeEvery(REPOS_REQUEST, getUserRepositories);
}

export function* watchRepositoriesSearch() {
  yield takeEvery(REPOS_SEARCH_REQUEST, searchRepositories);
}
