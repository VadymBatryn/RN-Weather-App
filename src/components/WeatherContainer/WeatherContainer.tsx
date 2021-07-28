import React from 'react';
import {Text, View} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/configureStore';

import Icons from '../../constants/icons';
import styles from './WeatherContainer.style';

interface WeatherContainerProps {
  description: string;
  location: string;
  temperature: string;
  id: string;
}

const WeatherContainer: React.FC<WeatherContainerProps> = ({
  description,
  location,
  temperature,
  id,
}) => {
  const formatedDescription = description
    ? description[0].toUpperCase() + description.slice(1)
    : '';

  const date = useSelector((state: RootState) => state.weather.todayData);
  const time = useSelector((state: RootState) => state.weather.time);

  let iconName = 'reload';

  for (const [key, value] of Object.entries(Icons)) {
    if (key === id) {
      iconName = value;
    }
  }

  return (
    <View style={styles.todayData}>
      <View style={styles.dayInfoContainer}>
        <View>
          <Text style={styles.cityName}>{location}</Text>
          <Text style={styles.weatherTypeText}>{formatedDescription}</Text>
        </View>
        <Text style={styles.dayInfoTextRight}>
          {date}
          {'\n'}
          {time}
        </Text>
      </View>
      <View style={styles.weatherInfoContainer}>
        <Text style={styles.temperature}>{temperature + iconName}</Text>
        {/* <Icon name={iconName} color="#fff" size={75} /> */}
      </View>
    </View>
  );
};

export default WeatherContainer;
