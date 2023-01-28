import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'components/services.js/API';
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

const authOperations = { register, login, logout };
export default authOperations;
