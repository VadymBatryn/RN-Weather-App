import React from 'react';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import WeatherDetails from '../screens/DetailsScreen';

export enum WeatherStackScreenTypes {
  Home = 'Home',
  Details = 'Details',
}

type WeatherStackParamsList = {
  [WeatherStackScreenTypes.Home]: undefined;
  [WeatherStackScreenTypes.Details]: {date: number};
};

export type DetailsScreenRouteProp = RouteProp<
  WeatherStackParamsList,
  WeatherStackScreenTypes.Details
>;

export type DetailsScreenNavigationProp = StackNavigationProp<
  WeatherStackParamsList,
  WeatherStackScreenTypes.Details
>;

export type WeatherDetailsProps = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const Stack = createStackNavigator<WeatherStackParamsList>();

const WeatherStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={WeatherStackScreenTypes.Home}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={WeatherStackScreenTypes.Details}
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
