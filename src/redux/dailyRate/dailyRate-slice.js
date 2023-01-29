import { createSlice } from '@reduxjs/toolkit';
import { dailyRate } from './dailyRate-operations';

const initialState = {
  dailyRate: null,
  notAllowedProducts: [],
  error: null,
  isLoading: false,
};

const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(dailyRate.pending, state => {
        state.isLoading = true;
      })
      .addCase(dailyRate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dailyRate = action.payload.dailyRate;
        state.notAllowedProducts = action.payload.notAllowedProducts;
      })
      .addCase(dailyRate.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const dailyRateReducer = dailyRateSlice.reducer;
