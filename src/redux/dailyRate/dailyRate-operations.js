import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const dailyRate = createAsyncThunk(
  'dailyRate',
  async (credentials, thunkApi) => {
    try {
      const { data } = await axios.post('/daily-rate', credentials);
      return data;
    } catch (err) {
      thunkApi.rejectWithValue();
      console.log(err);
    }
  }
);
