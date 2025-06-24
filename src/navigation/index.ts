import { RatePair } from '@/types/rates';
import { createNavigationContainerRef } from '@react-navigation/native';
import { TabsParamList } from './Tabs';

export interface MainStackParamList extends Record<string, any> {
  Tabs: undefined;
  Rate: { rate: RatePair };
}

export const navigationRef = createNavigationContainerRef<MainStackParamList>();

export function navigate<
  RouteName extends keyof MainStackParamList | keyof TabsParamList,
>(
  screen: RouteName,
  params?: RouteName extends keyof TabsParamList
    ? TabsParamList[RouteName]
    : RouteName extends keyof MainStackParamList
      ? MainStackParamList[RouteName]
      : never,
  options?: { merge?: boolean; pop?: boolean },
): void {
  if (!navigationRef.isReady() || !navigationRef.current) return;
  navigationRef.current.navigate(screen as any, params, options);
}
