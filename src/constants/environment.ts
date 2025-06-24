import Constants from 'expo-constants';

export enum EnvironmentVariables {
  API_KEY = 'API_KEY',
}

export const isRunningInExpoGo = Constants.appOwnership === 'expo';

const vars =
  ((isRunningInExpoGo
    ? Constants.manifest2?.extra?.expoClient?.extras
    : (Constants.expoConfig as any).extras) as Record<
    EnvironmentVariables,
    string
  >) ?? {};

if (Object.values(EnvironmentVariables).some(key => !vars[key])) {
  console.error('Missing environment variables');
}

export const API_KEY = vars[EnvironmentVariables.API_KEY];
