import { combineReducers } from 'redux';

const dummyReducer = (state = true, action) => state;

export const rootReducer = combineReducers({ dummyState: dummyReducer });
