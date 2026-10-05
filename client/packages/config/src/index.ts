/**
 * @project/config
 *
 * Centralized application configuration.
 * Environment-aware, platform-agnostic.
 */

import type { AppEnvironment } from '@project/types';

/** Application configuration shape */
export interface AppConfig {
  appName: string;
  version: string;
  environment: AppEnvironment;
  api: {
    baseUrl: string;
    timeout: number;
  };
}

/** Default configuration values */
const defaults: AppConfig = {
  appName: 'Planivo',
  version: '1.0.0',
  environment: 'development',
  api: {
    baseUrl: 'http://localhost:3000/api',
    timeout: 30_000,
  },
};

/**
 * Creates application configuration.
 * Accepts partial overrides from environment-specific values.
 */
export function createAppConfig(overrides?: Partial<AppConfig>): AppConfig {
  return {
    ...defaults,
    ...overrides,
    api: {
      ...defaults.api,
      ...overrides?.api,
    },
  };
}

/**
 * Storage keys used across the application.
 * Centralized to prevent key collisions.
 */
export const STORAGE_KEYS = {
  PERSIST_ROOT: 'planivo:persist',
  THEME: 'planivo:theme',
  LOCALE: 'planivo:locale',
} as const;

export type StorageKey = (typeof STORAGE_KEYS)[keyof typeof STORAGE_KEYS];
