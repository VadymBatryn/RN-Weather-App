import React from 'react';
import {Text, View, FlatList, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';
import ListItem from '../ListItem/ListItem';

import styles from './WeeklyWeather.style';
import Days from '../../constants/days';

const WeeklyWeather: React.FC = () => {
  const weeklyWeatherData = useSelector(
    (state: RootState) => state.weather.weeklyWeather,
  );

  let weeklyDataShort = null;

  if (weeklyWeatherData) {
    var prevDay = new Date(weeklyWeatherData?.list[0].dt * 1000).getDay() - 1;
    weeklyDataShort = weeklyWeatherData?.list.filter(day => {
      let itemDay = new Date(day.dt * 1000).getDay();
      if (itemDay !== prevDay) {
        prevDay = itemDay;
        return day;
      }
    });
  }

  return (
    <View style={styles.weatherDetail}>
      <Text style={styles.listLabel}>Weekly</Text>
      {weeklyWeatherData ? (
        <FlatList
          style={styles.list}
          data={weeklyDataShort}
          renderItem={itemData => (
            <ListItem
              title={Days[new Date(itemData.item.dt * 1000).getDay()]}
              temperature={itemData.item.main.temp.toFixed() + '°'}
              date={itemData.item.dt * 1000}
            />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.dt_txt}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
};

export default WeeklyWeather;
