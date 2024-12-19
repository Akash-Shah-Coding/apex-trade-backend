import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth : authReducer,
    users: userReducer
  },
});

export default store;
