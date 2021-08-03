import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import WeatherDetails from '../screens/DetailsScreen';

type WeatherStackParamsList = {
  Home: undefined;
  Details: {date: number};
};

export type DetailsScreenRouteProp = RouteProp<
  WeatherStackParamsList,
  'Details'
>;

export type DetailsScreenNavigationProp = StackNavigationProp<
  WeatherStackParamsList,
  'Details'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const Stack = createStackNavigator<WeatherStackParamsList>();

const WeatherStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Details"
      component={WeatherDetails}
      options={{headerShown: false}}
      initialParams={{date: undefined}}
    />
  </Stack.Navigator>
);

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <WeatherStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
