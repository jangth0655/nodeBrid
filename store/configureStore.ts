// configure store

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from '../reducer';

const store = configureStore({
  reducer: rootReducer,
});

const createStore = () => store;

const wrapper = createWrapper(createStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
