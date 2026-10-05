/**
 * Root reducer combining all slices and the RTK Query API reducer.
 */

import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '@project/api';
import appReducer from './slices/app/appSlice.js';

export const rootReducer = combineReducers({
  app: appReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
