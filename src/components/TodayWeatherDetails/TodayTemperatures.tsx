import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import Section from '../Section/Section';

import styles from './TodayTemperatures.style';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';

const TodayTemperatures = () => {
  const weeklyWeatherData = useSelector(
    (state: RootState) => state.weather.weeklyWeather,
  );

  let todayDetails = weeklyWeatherData?.list.filter(item => {
    let itemData = new Date(item.dt * 1000);
    let todayData = new Date();

    if (itemData.toLocaleDateString() === todayData.toLocaleDateString()) {
      return item;
    } else if (
      itemData.toLocaleDateString() === todayData.toLocaleDateString() + 1 &&
      itemData.getHours() > 0 &&
      itemData.getHours() <= todayData.getHours()
    ) {
      return item;
    }
  });

  return (
    <View style={styles.container}>
      {todayDetails ? (
        <FlatList
          contentContainerStyle={styles.listStyle}
          data={todayDetails}
          horizontal
          renderItem={itemData => (
            <Section
              time={new Date(itemData.item.dt * 1000).getHours() + ':00'}
              temperature={' ' + itemData.item.main.temp.toFixed() + '°'}
            />
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.dt_txt}
        />
      ) : (
        <ActivityIndicator size="large" color="#fff" />
      )}
    </View>
  );
};

export default TodayTemperatures;
