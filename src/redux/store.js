import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/auth-slice';
import { userReducer } from './user/user-slice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { dailyRateReducer } from './dailyRate/dailyRate-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    dailyRate: dailyRateReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
