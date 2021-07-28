import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WeatherDetails: React.FC = () => {
  return (
    <View style={styles.screen}>
      <Text>Details</Text>
    </View>
  );
};

export default WeatherDetails;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
