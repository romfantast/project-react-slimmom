import { createSlice } from '@reduxjs/toolkit';
import { infoUser } from './info-operations';

const initialState = {
  date: '',
  eatenProducts: [],
  daySummary: {},
  dailyRate: '',
  kcalConsumed: '',
  kcalLeft: '',
  percentsOfDailyRate: '',
};

const info = createSlice({
  name: 'infoUser',
  initialState,
  extraReducers: builder => {
    builder.addCase(infoUser.fulfilled, (state, action) => {
      state.date = action.payload.date;
      state.eatenProducts = action.payload.eatenProducts;
      state.daySummary = action.payload.daySummary;

      //======
      state.kcalLeft = action.payload.kcalLeft;
      state.kcalConsumed = action.payload.kcalConsumed;
      state.dailyRate = action.payload.dailyRate;
      state.percentsOfDailyRate = action.payload.percentsOfDailyRate;
    });
  },
});

export const infoReducer = info.reducer;
