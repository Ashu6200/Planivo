import { createStore } from '@project/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  ThemeProvider,
  Heading,
  Text,
  Card,
  Button,
} from '@project/ui';
import { useGetHealthQuery } from '@project/api';
import { useAppSelector, useAppDispatch, setTheme } from '@project/store';
import type { Theme } from '@project/types';

const { store, persistor } = createStore();

function HealthStatus() {
  const { data, isLoading, error } = useGetHealthQuery();

  if (isLoading) return <Text>Checking API health...</Text>;
  if (error) return <Text variant="caption" muted>API not reachable (expected during dev without backend)</Text>;

  return (
    <Text>
      API Status: {data?.status ?? 'unknown'} | Version: {data?.version ?? 'n/a'}
    </Text>
  );
}

function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.app.theme);

  const themes: Theme[] = ['light', 'dark', 'system'];

  return (
    <div className="flex flex-row gap-2">
      {themes.map((theme) => (
        <Button
          key={theme}
          variant={currentTheme === theme ? 'primary' : 'outline'}
          size="sm"
          onClick={() => dispatch(setTheme(theme))}
        >
          {theme}
        </Button>
      ))}
    </div>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col p-6 gap-4 max-w-[600px] mx-auto w-full">
      <div>
        <Heading level={1}>Planivo</Heading>
        <Text variant="caption">Cross-platform monorepo — Web (shadcn/ui)</Text>
      </div>

      <Card elevated>
        <Heading level={4}>Infrastructure Status</Heading>
        <div className="mt-2">
          <HealthStatus />
        </div>
      </Card>

      <Card>
        <Heading level={4}>Theme</Heading>
        <div className="mt-2">
          <ThemeSwitcher />
        </div>
      </Card>

      <Card>
        <Heading level={4}>Shared Packages</Heading>
        <div className="flex flex-col gap-1 mt-2">
          <Text variant="label">✓ @project/ui — shadcn/ui components</Text>
          <Text variant="label">✓ @project/store — Redux Toolkit</Text>
          <Text variant="label">✓ @project/api — RTK Query</Text>
          <Text variant="label">✓ @project/types — Shared types</Text>
          <Text variant="label">✓ @project/core — Business logic</Text>
          <Text variant="label">✓ @project/utils — Utilities</Text>
          <Text variant="label">✓ @project/config — Configuration</Text>
        </div>
      </Card>
    </div>
  );
}

function ThemedApp() {
  const currentTheme = useAppSelector((state) => state.app.theme);

  return (
    <ThemeProvider forcedTheme={currentTheme}>
      <AppContent />
    </ThemeProvider>
  );
}

export function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </ReduxProvider>
  );
}
