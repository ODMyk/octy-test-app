import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { Router } from './navigation/Router';
import { useTheme } from './theme';

const queryClient = new QueryClient();

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
      <Router />
      <Toast />
    </QueryClientProvider>
  );
};
