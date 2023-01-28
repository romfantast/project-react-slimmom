import { createSlice } from '@reduxjs/toolkit';
import { fetchStatus } from 'redux/fetchStatus';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import userOperations from './user-operations';

const initialState = {
  email: '',
  username: '',
  id: '',
  userData: {
    weight: '',
    height: '',
    age: '',
    bloodType: '',
    desiredWeight: '',
    dailyRate: '',
    notAllowedProducts: [],
  },
  days: '',
  error: null,
  status: fetchStatus.idle,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userOperations.current.pending, (state, _) => {
        state.status = fetchStatus.pending;
      })
      .addCase(userOperations.current.fulfilled, (state, action) => {
        state.status = fetchStatus.fullfield;
        state.email = action.payload.email;
        state.id = action.payload.id;
        state.username = action.payload.username;
        state.userData = action.payload.userData;
      })
      .addCase(userOperations.current.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
      });
  },
});

const persistConfigAuth = {
  key: 'authState',
  storage,
};

export const userReducer = persistReducer(persistConfigAuth, userSlice.reducer);
