/**
 * Mobile app root layout using expo-router.
 * Sets up providers (NativeWind, Redux, PersistGate, React Native Reusables ThemeProvider).
 */

import '../global.css';
import { Slot } from 'expo-router';
import { createStore, createPersistConfig, useAppSelector } from '@project/store';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@project/ui';
import { PortalHost } from '@rn-primitives/portal';
import AsyncStorage from '@react-native-async-storage/async-storage';

const nativePersistConfig = createPersistConfig(AsyncStorage);
const { store, persistor } = createStore(nativePersistConfig);

function ThemedLayout() {
  const currentTheme = useAppSelector((state) => state.app.theme);

  return (
    <ThemeProvider forcedTheme={currentTheme}>
      <Slot />
      <PortalHost />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemedLayout />
      </PersistGate>
    </ReduxProvider>
  );
}
