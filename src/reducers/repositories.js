import {REPOS_REQUEST, REPOS_SUCCESS} from '../actions/repositories';

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
