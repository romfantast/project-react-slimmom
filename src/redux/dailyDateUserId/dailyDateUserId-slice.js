import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { dailyRateUserId } from './dailyDateUserId-operations';

const initialState = {
  id: null,
  dailyRate: null,
  summaries: [],
  notAllowedProducts: [],
  isLoading: false,
};

const dailyRateUserIdSlice = createSlice({
  name: 'dailyRateUserId',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(dailyRateUserId.pending, state => {
        state.isLoading = true;
      })
      .addCase(dailyRateUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.id = action.payload.id;
        state.dailyRate = action.payload.dailyRate;
        state.summaries = action.payload.summaries;
        state.notAllowedProducts = action.payload.notAllowedProducts;
      })
      .addCase(dailyRateUserId.rejected, state => {
        state.isLoading = false;
      });
  },
});

const persistConfigDailyRateUserId = {
  key: 'dailyRateUserId',
  storage,
  whitelist: ['dailyRate', 'notAllowedProducts', 'summaries'],
};

export const dailyRateUserIdReducer = persistReducer(
  persistConfigDailyRateUserId,
  dailyRateUserIdSlice.reducer
);
