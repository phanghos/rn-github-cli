import {
  REPOS_REQUEST,
  REPOS_SUCCESS,
  REPOS_SEARCH_REQUEST,
  REPOS_SEARCH_SUCCESS,
  REPOS_SEARCH_CLEAR,
} from '../actions/repositories';

const initialState = {
  isLoading: false,
};

export const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPOS_REQUEST:
      return {...state, isLoading: true};
    case REPOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repositories: action.payload.repositories,
      };
    default:
      return state;
  }
};

export const repoSearchReducer = (state = initialState, action) => {
  switch (action.type) {
    case REPOS_SEARCH_REQUEST:
      return {...state, isLoading: true};
    case REPOS_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        repositories: action.payload.repositories,
      };
    case REPOS_SEARCH_CLEAR:
      return initialState;
    default:
      return state;
  }
};
