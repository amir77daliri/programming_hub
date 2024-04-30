// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/AuthSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;