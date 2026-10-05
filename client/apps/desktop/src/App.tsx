import { useEffect, useState } from 'react';
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
  if (error) return <Text variant="caption" muted>API not reachable</Text>;

  return (
    <Text>
      API Status: {data?.status ?? 'unknown'} | Version: {data?.version ?? 'n/a'}
    </Text>
  );
}

function ElectronInfo() {
  const [info, setInfo] = useState<{
    name: string;
    version: string;
    platform: string;
    arch: string;
  } | null>(null);

  useEffect(() => {
    // Use the preload API — no direct Node.js access
    window.electronAPI?.getAppInfo().then(setInfo).catch(() => {
      // Not running in Electron (e.g., during Vite dev without electron)
    });
  }, []);

  if (!info) return <Text variant="caption" muted>Electron API not available (browser mode)</Text>;

  return (
    <div className="flex flex-col gap-1">
      <Text variant="label">Platform: {info.platform}</Text>
      <Text variant="label">Arch: {info.arch}</Text>
      <Text variant="label">App: {info.name} v{info.version}</Text>
    </div>
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
        <Text variant="caption">Cross-platform monorepo — Desktop (shadcn/ui)</Text>
      </div>

      <Card elevated>
        <Heading level={4}>Electron Info</Heading>
        <div className="mt-2">
          <ElectronInfo />
        </div>
      </Card>

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
