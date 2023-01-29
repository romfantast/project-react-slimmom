import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import API from 'services.js/API';

axios.defaults.baseURL = 'https://slimmom-backend.goit.global';

export const infoUser = createAsyncThunk('infoUser', async (date, thunkApi) => {
  try {
    const { data } = await API.getInfoForDay(date);
    return data;
  } catch (error) {
    thunkApi.rejectWithValue();
  }
});
