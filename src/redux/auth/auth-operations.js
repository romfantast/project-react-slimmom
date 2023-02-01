import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await API.register(credentials);
      return data;
    } catch (error) {
      thunkApi.rejectWithValue();
    }
  }
);

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await API.login(user);
    token.set(data.accessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const response = await API.logout();
    token.unset();
    return response;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState();
    const persistedToken = savedToken.auth.refreshToken;
    const sid = savedToken.auth.sid;

    if (persistedToken === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    token.set(persistedToken);

    try {
      const { data } = await API.refresh(sid);
      token.set(data.newAccessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error?.response?.data?.message);
    }
  }
);

const authOperations = { register, login, logout, refreshUser };
export default authOperations;
