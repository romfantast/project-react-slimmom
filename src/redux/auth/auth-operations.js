import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';
// {email: 'passatik111@gmail.com', username: 'roma', id: '63d512a449bdbc328967944e'}

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

const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.refreshToken;
  const sid = state.auth.sid;

  if (persistToken === '') {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);

  try {
    const { data } = await API.refresh(sid);
    token.set(data.newAccessToken);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue();
  }
});

const authOperations = { register, login, logout, refresh };
export default authOperations;
