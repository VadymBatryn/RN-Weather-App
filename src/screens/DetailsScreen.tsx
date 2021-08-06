import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../store/configureStore';
import {WeatherDetailsProps} from '../navigation/WeatherNavigation';

import Chart from '../components/Chart/Chart';
import Details from '../components/Details/Details';

const WeatherDetails: React.FC<WeatherDetailsProps> = ({route}) => {
  const date = route.params?.date;

  const weeklyWeather = useSelector(
    (state: RootState) => state.weather.weeklyWeather,
  );

  const selectedDetails = weeklyWeather?.list.filter(
    dayInfo => dayInfo.dt * 1000 === date,
  );

  const probabilityOfPrecipitationData = weeklyWeather?.list
    .filter(dayInfo => {
      let dayDate = dayInfo.dt * 1000;
      if (
        new Date(dayDate).getUTCDate() === new Date(+date).getUTCDate() ||
        (new Date(dayDate).getUTCDate() === new Date().getUTCDate() + 1 &&
          new Date(dayDate).getUTCHours() <= 0)
      ) {
        return dayInfo;
      }
    })
    .map(day => {
      return {
        label: new Date(day.dt * 1000).getUTCHours().toString(),
        data: +(day.pop * 100).toFixed(),
      };
    });

  const temperaturesChartData = weeklyWeather?.list
    .filter(dayInfo => {
      let dayDate = dayInfo.dt * 1000;
      if (
        new Date(dayDate).getUTCDate() === new Date(+date).getUTCDate() ||
        (new Date(dayDate).getUTCDate() === new Date().getUTCDate() + 1 &&
          new Date(dayDate).getUTCHours() <= 0)
      ) {
        return dayInfo;
      }
    })
    .map(day => {
      return {
        label: new Date(day.dt * 1000).getUTCHours().toString(),
        data: +day.main.temp.toFixed(),
      };
    });

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={require('../assets/698610.jpeg')}
        style={styles.backgroundImage}>
        <SafeAreaView>
          {selectedDetails &&
          probabilityOfPrecipitationData &&
          temperaturesChartData ? (
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
                title={'Probability of Precipitation'}
                suffix={'%'}
                info={probabilityOfPrecipitationData}
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
