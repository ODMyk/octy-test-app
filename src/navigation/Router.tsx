import { Disclaimer } from '@/components/custom/Disclaimer';
import { RateDetailsScreen } from '@/screens/RateDetails';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { MainStackParamList, navigationRef } from '.';
import { TabsNavigator } from './Tabs';

const MainNavigator = createNativeStackNavigator<MainStackParamList>();

const options: NativeStackNavigationOptions = {
  headerShown: false,
  animation: Platform.OS === 'ios' ? 'simple_push' : 'slide_from_right',
};

export const Router = () => {
  return (
    <>
      <NavigationContainer ref={navigationRef}>
        <MainNavigator.Navigator
          screenOptions={options}
          initialRouteName="Tabs">
          <MainNavigator.Screen name="Tabs" component={TabsNavigator} />
          <MainNavigator.Screen name="Rate" component={RateDetailsScreen} />
        </MainNavigator.Navigator>
      </NavigationContainer>
      <Disclaimer />
    </>
  );
};
