import React from 'react';
import {ActivityIndicator, ImageBackground, View} from 'react-native';

import {StyleSheet} from 'react-native';
//import {useNavigation} from '@react-navigation/core';
import {SafeAreaView} from 'react-native-safe-area-context';

import Search from '../components/Search/Search';
import WeatherContainer from '../components/WeatherContainer/WeatherContainer';
import WeeklyWeather from '../components/WeeklyWeather/WeeklyWeather';
import TodayWeatherDetails from '../components/TodayWeatherDetails/TodayTemperatures';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import {useEffect} from 'react';
import {fetchFromStorage} from '../store/thunk/asyncStorageThunk';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const weeklyWeather = useSelector(
    (state: RootState) => state.weather.weeklyWeather,
  );

  useEffect(() => {
    dispatch(fetchFromStorage());
  }, [dispatch]);

  if (!weeklyWeather) {
    return (
      <View>
        <ImageBackground
          source={require('../assets/698610.jpeg')}
          style={styles.backgroundImage}>
          <ActivityIndicator size="large" color="#fff" />
        </ImageBackground>
      </View>
    );
  }

  return (
    <View>
      <ImageBackground
        source={require('../assets/698610.jpeg')}
        style={styles.backgroundImage}>
        <SafeAreaView style={styles.screen}>
          <View>
            <Search />
            <WeatherContainer temperature="" location="" id="" description="" />
            <TodayWeatherDetails />
            <WeeklyWeather />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
});
