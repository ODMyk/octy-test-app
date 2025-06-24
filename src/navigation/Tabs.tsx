import { CalculatorIocn } from '@/assets/icons/Calculator';
import { SearchIcon } from '@/assets/icons/Search';
import { StarIcon } from '@/assets/icons/Star';
import { TabsLayout } from '@/components/layout/TabsLayout';
import { FavoritesScreen } from '@/screens/Favorites';
import { HomeScreen } from '@/screens/Home';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { ColorValue } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { CalculatorScreen } from '../screens/Calculator';

export type TabsParamList = {
  Home: undefined;
  Favorites: undefined;
  Calculator: undefined;
};

const options: BottomTabNavigationOptions = {
  headerShown: false,
  animation: 'fade',
};

const Tabs = createBottomTabNavigator<TabsParamList>();

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

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={options}
      layout={TabsLayout}
      initialRouteName="Home">
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Explore',
          tabBarIcon: iconWrapper(SearchIcon),
        }}
      />
      <Tabs.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{ title: 'Favorites', tabBarIcon: iconWrapper(StarIcon) }}
      />
      <Tabs.Screen
        name="Calculator"
        component={CalculatorScreen}
        options={{
          title: 'Calculator',
          tabBarIcon: iconWrapper(CalculatorIocn),
        }}
      />
    </Tabs.Navigator>
  );
};
