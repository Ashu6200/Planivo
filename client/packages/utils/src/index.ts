/**
 * @project/utils
 *
 * Generic utilities, formatting helpers, and safe helper functions.
 * Platform-agnostic — no browser, Node, or React Native globals.
 */

/**
 * Creates a debounced version of a function that delays invocation
 * until `ms` milliseconds have elapsed since the last call.
 */
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  ms: number,
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return (...args: Parameters<T>) => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => fn(...args), ms);
  };
}

/**
 * Type-safe check for non-null/undefined values.
 * Useful for filtering arrays: `items.filter(isDefined)`
 */
export function isDefined<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

/**
 * Safely parses a JSON string, returning undefined on failure
 * instead of throwing.
 */
export function safeJsonParse<T>(json: string): T | undefined {
  try {
    return JSON.parse(json) as T;
  } catch {
    return undefined;
  }
}

/**
 * Formats a date string to a human-readable locale string.
 * Returns empty string for invalid dates.
 */
export function formatDate(
  isoString: string,
  locale = 'en-US',
  options?: Intl.DateTimeFormatOptions,
): string {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return '';
  }
  return date.toLocaleDateString(locale, options);
}

/**
 * Generates a simple unique ID.
 * Not cryptographically secure — use for UI keys only.
 */
export function generateId(): string {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Clamps a number between a minimum and maximum value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Creates a shallow delay promise.
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
