/**
 * @project/store
 *
 * Redux Toolkit store with Redux Persist and RTK Query integration.
 */

// Store
export { createStore } from './store.js';
export type { AppStore, AppDispatch } from './store.js';

// Root reducer and state type
export { rootReducer } from './rootReducer.js';
export type { RootState } from './rootReducer.js';

// Typed hooks
export { useAppDispatch, useAppSelector } from './hooks.js';

// App slice
export {
  appSlice,
  setTheme,
  setLocale,
  setInitialized,
} from './slices/app/appSlice.js';
export type { AppState } from './slices/app/appSlice.js';

// Persistence
export { defaultPersistConfig, createPersistConfig } from './persistence/persistConfig.js';
