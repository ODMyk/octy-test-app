import {GearIcon} from '@/assets/icons/Gear';
import {HeartIcon} from '@/assets/icons/Heart';
import {ProfileIcon} from '@/assets/icons/Profile';
import {SearchIcon} from '@/assets/icons/Search';
import {TabsLayout} from '@/components/layout/TabsLayout';
import {AdminScreen} from '@/screens/Main/Admin';
import {FavoritesScreen} from '@/screens/Main/Favorites';
import {HomeScreen} from '@/screens/Main/Home';
import {ProfileScreen} from '@/screens/Main/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ColorValue} from 'react-native';
import {SvgProps} from 'react-native-svg';

type TabsParamList = {
  Home: undefined;
  Favorites: undefined;
  Admin: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<TabsParamList>();

const iconWrapper = (Icon: (props: SvgProps) => React.ReactElement) => {
  const WrappedIcon = ({color, size}: {color: ColorValue; size: number}) => (
    <Icon height={size} width={size} color={color} />
  );
  return WrappedIcon;
};

export const TabsNavigator = () => {
  return (
    <Tabs.Navigator screenOptions={{headerShown: false}} layout={TabsLayout}>
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
        options={{title: 'Favorites', tabBarIcon: iconWrapper(HeartIcon)}}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile', tabBarIcon: iconWrapper(ProfileIcon)}}
      />
      <Tabs.Screen
        name="Admin"
        component={AdminScreen}
        options={{title: 'Admin', tabBarIcon: iconWrapper(GearIcon)}}
      />
    </Tabs.Navigator>
  );
};
