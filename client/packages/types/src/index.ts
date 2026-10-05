/**
 * @project/types
 *
 * Shared domain types, API contracts, and common TypeScript types.
 * No runtime logic — pure type definitions only.
 */

// ── Domain Types ──────────────────────────────────────────────

/** Represents a unique entity identifier */
export type EntityId = string;

/** ISO 8601 date string */
export type ISODateString = string;

// ── App State Types ───────────────────────────────────────────

/** Supported application themes */
export type Theme = 'light' | 'dark' | 'system';

/** Supported locales */
export type Locale = 'en' | 'es' | 'fr' | 'de';

/** Application environment */
export type AppEnvironment = 'development' | 'test' | 'production';

/** Core application preferences persisted across sessions */
export interface AppPreferences {
  theme: Theme;
  locale: Locale;
}

// ── API Contract Types ────────────────────────────────────────

/** Standard API response wrapper */
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  timestamp: ISODateString;
}

/** Standard API error shape */
export interface ApiError {
  status: number;
  message: string;
  code?: string;
}

/** Health check response */
export interface HealthCheckResponse {
  status: 'ok' | 'degraded' | 'down';
  version: string;
  uptime: number;
}

// ── Platform Types ────────────────────────────────────────────

/** Supported runtime platforms */
export type Platform = 'web' | 'mobile' | 'desktop';

/** Platform-specific storage configuration */
export interface PlatformStorageConfig {
  platform: Platform;
  storageKey: string;
}
