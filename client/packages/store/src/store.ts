/**
 * Redux store factory.
 *
 * Creates a configured store with:
 * - Combined reducers (app slices + RTK Query)
 * - Redux Persist integration
 * - RTK Query middleware
 * - Proper TypeScript types
 */

import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from '@project/api';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import type { PersistConfig } from 'redux-persist';
import { rootReducer } from './rootReducer.js';
import type { RootState } from './rootReducer.js';
import { defaultPersistConfig } from './persistence/persistConfig.js';

/**
 * Creates the Redux store with optional platform-specific persist config.
 *
 * @param persistConfig - Override the default persist config (e.g., for React Native AsyncStorage)
 */
export function createStore(persistConfig?: PersistConfig<RootState>) {
  const config = persistConfig ?? defaultPersistConfig;

  const persistedReducer = persistReducer(config, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // redux-persist actions contain non-serializable values
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });

  const persistor = persistStore(store);

  return { store, persistor };
}

export type AppStore = ReturnType<typeof createStore>['store'];
export type AppDispatch = AppStore['dispatch'];
