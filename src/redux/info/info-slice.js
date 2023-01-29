import { createSlice } from '@reduxjs/toolkit';
import { infoUser } from './info-operations';

const initialState = {};

const info = createSlice({
  name: 'infoUser',
  initialState,
  extraReducers: builder => {
    builder.addCase(infoUser.fulfilled, (state, action) => {});
  },
});

export const infoReducer = info.reducer;
