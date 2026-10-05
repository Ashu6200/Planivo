/**
 * Mobile home screen.
 * Demonstrates consumption of shared packages and React Native Reusables.
 */

import { View } from 'react-native';
import { Heading, Text, Card, Button } from '@project/ui';
import { useAppSelector, useAppDispatch, setTheme } from '@project/store';
import { useGetHealthQuery } from '@project/api';
import type { Theme } from '@project/types';
import { SafeAreaView } from 'react-native-safe-area-context';

function HealthStatus() {
  const { data, isLoading, error } = useGetHealthQuery();

  if (isLoading) return <Text>Checking API health...</Text>;
  if (error) return <Text variant="caption" muted>API not reachable</Text>;

  return (
    <Text>
      API Status: {data?.status ?? 'unknown'}
    </Text>
  );
}

export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.app.theme);

  const themes: Theme[] = ['light', 'dark', 'system'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 p-4 flex-col gap-4">
        <View>
          <Heading level={2}>Planivo Mobile</Heading>
          <Text variant="caption">Cross-platform monorepo — Mobile (RN Reusables)</Text>
        </View>

        <Card elevated>
          <Heading level={4}>Infrastructure</Heading>
          <View className="mt-2">
            <HealthStatus />
          </View>
        </Card>

        <Card>
          <Heading level={4}>Theme: {currentTheme}</Heading>
          <View className="flex-col gap-2 mt-2">
            {themes.map((theme) => (
              <Button
                key={theme}
                variant={currentTheme === theme ? 'primary' : 'outline'}
                onPress={() => dispatch(setTheme(theme))}
              >
                <Text>
                  {theme}
                </Text>
              </Button>
            ))}
          </View>
        </Card>
      </View>
    </SafeAreaView>
  );
}
