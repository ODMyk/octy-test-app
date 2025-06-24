import { persistQueryClient } from '@tanstack/query-persist-client-core';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { TopBar } from './components/custom/TopBar';
import { Router } from './navigation/Router';
import { storage } from './services/mmkv';
import { useTheme } from './theme';

const queryClient = new QueryClient();

const persister = createSyncStoragePersister({
  storage: {
    getItem: (key: string) => storage.getString(key) ?? null,
    setItem: (key: string, value: string) => storage.set(key, value),
    removeItem: (key: string) => storage.delete(key),
  },
});

persistQueryClient({
  queryClient,
  persister,
});

export const App = () => {
  const { Fonts } = useTheme();
  const [fontsLoaded] = useFonts({
    [Fonts.regular]: require('./assets/fonts/Inter_Regular.ttf'),
    [Fonts.medium]: require('./assets/fonts/Inter_Medium.ttf'),
    [Fonts.semiBold]: require('./assets/fonts/Inter_SemiBold.ttf'),
    [Fonts.bold]: require('./assets/fonts/Inter_Bold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <TopBar />
        <Router />
        <Toast />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};
