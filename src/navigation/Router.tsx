import { GearIcon } from '@/assets/icons/Gear';
import { HeartIcon } from '@/assets/icons/Heart';
import { SearchIcon } from '@/assets/icons/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { TabsParamList, navigationRef } from '.';
import { CalculatorScreen } from '../screens/Calculator';
import { FavoritesScreen } from '../screens/Favorites';
import { HomeScreen } from '../screens/Home';

const MainNavigator = createBottomTabNavigator<TabsParamList>();

const iconWrapper = (Icon: (props: SvgProps) => React.ReactElement) => {
  const WrappedIcon = ({
    color,
    size,
  }: {
    color: ColorValue;
    size: number;
  }) => <Icon height={size} width={size} color={color} />;
  return WrappedIcon;
};

export const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigator.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <MainNavigator.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Explore',
            tabBarIcon: iconWrapper(SearchIcon),
          }}
        />
        <MainNavigator.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ title: 'Favorites', tabBarIcon: iconWrapper(HeartIcon) }}
        />
        <MainNavigator.Screen
          name="Calculator"
          component={CalculatorScreen}
          options={{ title: 'Calculator', tabBarIcon: iconWrapper(GearIcon) }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};
