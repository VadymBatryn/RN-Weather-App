import React from 'react';
import {Text, View} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Details.style';

interface DetailsParams {
  feel_like: string;
  wind: string;
  humidity: string;
  pressure: string;
  visibility: string;
  cloudy: string;
}

const Details: React.FC<DetailsParams> = ({
  feel_like,
  cloudy,
  humidity,
  pressure,
  visibility,
  wind,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.label}>Details</Text>
      </View>
      <View style={styles.grid}>
        <View style={styles.gridCard}>
          <Icons name="thermometer" size={40} color="white" />
          <Text style={styles.cardText}>Feels like</Text>
          <Text style={styles.cardText}> {feel_like}</Text>
        </View>

        <View style={styles.gridCard}>
          <Icons name="weather-windy" size={40} color="white" />
          <Text style={styles.cardText}>Wind</Text>
          <Text style={styles.cardText}>{wind}</Text>
        </View>

        <View style={styles.gridCard}>
          <Icons name="water-outline" size={40} color="white" />
          <Text style={styles.cardText}>Humidity</Text>
          <Text style={styles.cardText}>{humidity}</Text>
        </View>

        <View style={styles.gridCard}>
          <Icons name="gauge" size={40} color="white" />
          <Text style={styles.cardText}>Pressure</Text>
          <Text style={styles.cardText}>{pressure}</Text>
        </View>

        <View style={styles.gridCard}>
          <Icons name="eye-outline" size={40} color="white" />
          <Text style={styles.cardText}>Visibility</Text>
          <Text style={styles.cardText}>{visibility}</Text>
        </View>

        <View style={styles.gridCard}>
          <Icons name="cloud-outline" size={40} color="white" />
          <Text style={styles.cardText}>Cloudy</Text>
          <Text style={styles.cardText}>{cloudy}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
