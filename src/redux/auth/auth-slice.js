import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchStatus } from 'redux/fetchStatus';

const initialState = {
  isAuth: false,
  token: null,
  refreshToken: '',
  sid: '',
  status: fetchStatus.idle,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(authOperations.register.pending, (state, _) => {
        state.status = fetchStatus.pending;
      })
      .addCase(authOperations.register.fulfilled, (state, action) => {
        state.status = fetchStatus.fullfield;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.user = { ...action.payload.user };
        state.isAuth = true;
        state.error = '';
      })
      .addCase(authOperations.register.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = null;
      })
      .addCase(authOperations.login.pending, (state, _) => {
        state.status = fetchStatus.pending;
      })
      .addCase(authOperations.login.fulfilled, (state, action) => {
        state.status = fetchStatus.fullfield;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.user = { ...action.payload.user };
        state.isAuth = true;
        state.error = '';
      })
      .addCase(authOperations.login.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = null;
        state.refreshToken = '';
      })
      .addCase(authOperations.logout.pending, (state, _) => {
        state.status = fetchStatus.pending;
      })
      .addCase(authOperations.logout.fulfilled, (state, _) => {
        state.status = fetchStatus.fullfield;
        state.token = '';
        state.refreshToken = '';
        state.sid = '';
        state.isAuth = false;
        state.user = {};
        state.error = '';
      })
      .addCase(authOperations.logout.rejected, (state, _) => {
        state.status = fetchStatus.rejected;
        state.token = null;
      })
      .addCase(authOperations.refreshUser.pending, state => {
        state.isFetched = false;
        state.error = '';
      })
      .addCase(authOperations.refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.newAccessToken;
        state.refreshToken = action.payload.newRefreshToken;
        state.sid = action.payload.sid;
        state.error = '';

        state.isAuth = true;
        state.isFetched = true;
      })
      .addCase(authOperations.refreshUser.rejected, (state, action) => {
        state.isFetched = false;
      });
  },
});

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['refreshToken', 'isAuth', 'user', 'sid', 'token'],
};

export const authReducer = persistReducer(persistConfigAuth, authSlice.reducer);
