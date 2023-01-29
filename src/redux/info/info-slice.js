import { createSlice } from '@reduxjs/toolkit';
import { infoUser } from './info-operations';

const initialState = {
  date: '',
  eatenProducts: [],
  daySummary: {},
};

const info = createSlice({
  name: 'infoUser',
  initialState,
  extraReducers: builder => {
    builder.addCase(infoUser.fulfilled, (state, action) => {
      state.date = action.payload.date;
      state.eatenProducts = action.payload.eatenProducts;
      state.daySummary = action.payload.daySummary;
    });
  },
});

export const infoReducer = info.reducer;
