import { createNavigationContainerRef } from '@react-navigation/native';

export type TabsParamList = {
  Home: undefined;
  Favorites: undefined;
  Calculator: undefined;
};

export const navigationRef = createNavigationContainerRef<TabsParamList>();

export function navigate<RouteName extends keyof TabsParamList>(
  screen: RouteName,
  params?: TabsParamList[RouteName],
  options?: { merge?: boolean; pop?: boolean },
): void {
  if (!navigationRef.isReady() || !navigationRef.current) return;
  navigationRef.current.navigate(screen as any, params, options);
}
