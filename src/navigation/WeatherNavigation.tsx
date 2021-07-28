import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import WeatherDetails from '../screens/DetailsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const WeatherStackNavigator: React.FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Weather Details" component={WeatherDetails} />
  </Stack.Navigator>
);

const WeatherDrawerNavigator: React.FC = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={WeatherStackNavigator} />
  </Drawer.Navigator>
);

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <WeatherDrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
