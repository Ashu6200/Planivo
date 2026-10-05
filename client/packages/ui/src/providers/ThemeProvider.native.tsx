import { createContext, useContext, useState, type ReactNode } from 'react';
import { useColorScheme as useRNColorScheme } from 'react-native';

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
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
  forcedTheme,
  ...props
}: ThemeProviderProps) {
  const systemColorScheme = useRNColorScheme();
  const [theme, setThemeState] = useState<Theme>(forcedTheme ?? defaultTheme);

  const currentTheme = forcedTheme ?? theme;
  const resolvedTheme: 'light' | 'dark' =
    currentTheme === 'system' ? (systemColorScheme === 'dark' ? 'dark' : 'light') : currentTheme;

  const setTheme = (newTheme: Theme) => {
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
