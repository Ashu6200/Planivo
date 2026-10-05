import type { ReactNode } from 'react';
import { PortalHost } from '@rn-primitives/portal';
import { ThemeProvider, type Theme } from './ThemeProvider.native.js';

export interface AppProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  store?: unknown;
  persistor?: unknown;
  loading?: ReactNode;
}

export function AppProvider({
  children,
  defaultTheme = 'light',
}: AppProviderProps) {
  return (
    <ThemeProvider defaultTheme={defaultTheme}>
      {children}
      <PortalHost />
    </ThemeProvider>
  );
}
