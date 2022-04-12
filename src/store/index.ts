import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import seat from './seat';

const reducer = combineReducers({
  seat,
});

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
