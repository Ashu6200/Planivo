/**
 * Redux Persist configuration.
 *
 * Strategy:
 * - WHITELIST only state that genuinely needs persistence
 * - Do NOT persist RTK Query cache (reducerPath: 'api')
 * - Do NOT persist transient UI state, loading flags, or errors
 *
 * Storage is injected per platform:
 * - Web: localStorage (via redux-persist/lib/storage)
 * - React Native: AsyncStorage
 * - Electron: localStorage in renderer (same as web)
 */

import type { PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { RootState } from '../rootReducer.js';

/**
 * Default persist config using web localStorage.
 * The whitelist ensures only 'app' slice is persisted.
 * RTK Query cache ('api') is intentionally excluded.
 */
export const defaultPersistConfig: PersistConfig<RootState> = {
  key: 'planivo:persist',
  storage,
  whitelist: ['app'],
  // 'api' (RTK Query cache) is NOT whitelisted — transient server state
};

/**
 * Creates a platform-specific persist config.
 * Allows swapping the storage engine per platform while keeping
 * the same whitelist/blacklist strategy.
 */
export function createPersistConfig(
  platformStorage: PersistConfig<RootState>['storage'],
): PersistConfig<RootState> {
  return {
    ...defaultPersistConfig,
    storage: platformStorage,
  };
}
