import type { ReactNode } from 'react';
import { ThemeProvider, type Theme } from './ThemeProvider.js';

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
    </ThemeProvider>
  );
}
