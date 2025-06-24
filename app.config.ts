import 'dotenv/config';

export default {
  expo: {
    name: 'Currency Rates',
    slug: 'octy-test-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './src/assets/images/icon.png',
    scheme: 'octitestapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
    },
    android: {
      package: 'com.dmyko.CurrencyRates',
      adaptiveIcon: {
        foregroundImage: './src/assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
    },
    plugins: [
      [
        'expo-splash-screen',
        {
          image: './src/assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
      'expo-font',
    ],
    experiments: {
      typedRoutes: true,
    },
    extras: {
      API_KEY: process.env.API_KEY,
    },
  },
};
