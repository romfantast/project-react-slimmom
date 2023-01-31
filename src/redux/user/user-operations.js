import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';
import { token } from 'redux/auth/auth-operations';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const current = createAsyncThunk('current/user', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistToken = state.auth.token;
  if (persistToken === null) {
    return thunkAPI.rejectWithValue();
  }
  token.set(persistToken);
  try {
    const result = await API.currentUser();
    return result;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const userOperations = { current };
export default userOperations;
