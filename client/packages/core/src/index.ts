/**
 * @project/core
 *
 * Business/domain logic and reusable application services.
 * Framework-independent — no React, DOM, Electron, or React Native.
 */

export { createAppConfig, STORAGE_KEYS } from '@project/config';
export type { AppConfig, StorageKey } from '@project/config';

export { isDefined, safeJsonParse, formatDate, generateId, clamp, delay } from '@project/utils';

export type {
  EntityId,
  Theme,
  Locale,
  AppPreferences,
  Platform,
  ApiResponse,
  ApiError,
  HealthCheckResponse,
} from '@project/types';

/**
 * Validates that a string is a valid application theme.
 */
export function isValidTheme(value: unknown): value is 'light' | 'dark' | 'system' {
  return value === 'light' || value === 'dark' || value === 'system';
}

/**
 * Returns the default app preferences.
 */
export function getDefaultPreferences(): { theme: 'system'; locale: 'en' } {
  return {
    theme: 'system',
    locale: 'en',
  };
}
