import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Details from '../components/Details/Details';

import {useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import Chart from '../components/Chart/Chart';
import {DetailsScreenRouteProp} from '../navigation/WeatherNavigation';

const WeatherDetails: React.FC = () => {
  const route = useRoute<DetailsScreenRouteProp>();

  const date = route.params?.date;

  const weeklyWeather = useSelector(
    (state: RootState) => state.weather.weeklyWeather,
  );

  const selectedDetails = weeklyWeather?.list.filter(
    dayInfo => dayInfo.dt * 1000 === date,
  );

  const rainChartData = weeklyWeather?.list
    .filter(dayInfo => {
      if (
        new Date(dayInfo.dt * 1000).getUTCDate() ===
        new Date(+date).getUTCDate()
      ) {
        return dayInfo;
      }
    })
    .map(day => {
      return {
        label: new Date(day.dt * 1000).getUTCHours().toString(),
        data: day.pop * 100,
      };
    });

  const temperaturesChartData = weeklyWeather?.list
    .filter(dayInfo => {
      if (
        new Date(dayInfo.dt * 1000).getUTCDate() ===
        new Date(+date).getUTCDate()
      ) {
        return dayInfo;
      }
    })
    .map(day => {
      return {
        label: new Date(day.dt * 1000).getUTCHours().toString(),
        data: day.main.temp,
      };
    });

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../assets/698610.jpeg')}
        style={styles.backgroundImage}>
        <SafeAreaView>
          {selectedDetails && rainChartData && temperaturesChartData ? (
            <View>
              <Details
                feel_like={selectedDetails[0].main.feels_like.toFixed() + '°'}
                cloudy={selectedDetails[0].clouds.all.toString() + '%'}
                humidity={selectedDetails[0].main.humidity + '%'}
                pressure={selectedDetails[0].main.pressure.toFixed() + ' hPa'}
                visibility={selectedDetails[0].visibility / 1000 + ' km'}
                wind={selectedDetails[0].wind.speed + 'km/h'}
              />
              <Chart
                title={'Chanse of Rain'}
                suffix={'%'}
                info={rainChartData}
              />
              <Chart
                title={'Day temperatures'}
                suffix={'°'}
                info={temperaturesChartData}
              />
            </View>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
});
