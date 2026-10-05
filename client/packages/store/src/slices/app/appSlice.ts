/**
 * App slice — client-side application state.
 *
 * Contains: theme preference, locale, app readiness.
 * Does NOT contain server/API data (that's RTK Query's job).
 */

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Locale, Theme } from '@project/types';

export interface AppState {
  /** User's theme preference */
  theme: Theme;
  /** User's locale preference */
  locale: Locale;
  /** Whether the app has completed initial setup */
  initialized: boolean;
}

const initialState: AppState = {
  theme: 'system',
  locale: 'en',
  initialized: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setLocale(state, action: PayloadAction<Locale>) {
      state.locale = action.payload;
    },
    setInitialized(state, action: PayloadAction<boolean>) {
      state.initialized = action.payload;
    },
  },
});

export const { setTheme, setLocale, setInitialized } = appSlice.actions;
export default appSlice.reducer;
