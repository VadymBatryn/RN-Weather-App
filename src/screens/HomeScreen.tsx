import React, {useEffect} from 'react';
import {ActivityIndicator, ImageBackground, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
//Components
import Search from '../components/Search/Search';
import WeatherContainer from '../components/WeatherContainer/WeatherContainer';
import WeeklyWeather from '../components/WeeklyWeather/WeeklyWeather';
import TodayWeatherDetails from '../components/TodayWeatherDetails/TodayTemperatures';
//Thunk
import {fetchFromStorage} from '../store/thunk/asyncStorageThunk';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();

  const weeklyWeather = useSelector(
    (state: RootState) => state.weather.weeklyWeather,
  );

  const cityName = useSelector((state: RootState) => state.weather.cityName);

  useEffect(() => {
    dispatch(fetchFromStorage());
  }, [dispatch]);

  let todayWeather;

  if (weeklyWeather) {
    todayWeather = weeklyWeather.list.filter(dayInfo => {
      if (new Date(dayInfo.dt * 1000).getUTCDay() === new Date().getUTCDay()) {
        return dayInfo;
      }
    });
  }

  if (!todayWeather) {
    return (
      <View>
        <ImageBackground
          source={require('../assets/698610.jpeg')}
          style={styles.backgroundImage}>
          {cityName ? (
            <ActivityIndicator size="large" color="#fff" />
          ) : (
            <Search />
          )}
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
            <WeatherContainer
              temperature={todayWeather[0].main.temp.toFixed()}
              location={
                weeklyWeather?.city.name + ', ' + weeklyWeather?.city.country
              }
              id={todayWeather[0].weather[0].icon}
              description={todayWeather[0].weather[0].description}
            />
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
