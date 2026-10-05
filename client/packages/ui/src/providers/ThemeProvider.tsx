import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  forcedTheme?: Theme;
}

interface ThemeProviderState {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
  theme: 'system',
  resolvedTheme: 'light',
  setTheme: () => null,
};

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'planivo-ui-theme',
  forcedTheme,
  ...props
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (forcedTheme) return forcedTheme;
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'light' || stored === 'dark' || stored === 'system') {
          return stored;
        }
      } catch {
        // ignore localStorage access errors
      }
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  const currentTheme = forcedTheme ?? theme;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');

    if (currentTheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const systemTheme = mediaQuery.matches ? 'dark' : 'light';
      root.classList.add(systemTheme);
      setResolvedTheme(systemTheme);

      const listener = (e: MediaQueryListEvent) => {
        root.classList.remove('light', 'dark');
        const updated = e.matches ? 'dark' : 'light';
        root.classList.add(updated);
        setResolvedTheme(updated);
      };

      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }

    root.classList.add(currentTheme);
    setResolvedTheme(currentTheme);
  }, [currentTheme]);

  const setTheme = (newTheme: Theme) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch {
        // ignore
      }
    }
    setThemeState(newTheme);
  };

  return (
    <ThemeProviderContext.Provider
      {...props}
      value={{
        theme: currentTheme,
        resolvedTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
