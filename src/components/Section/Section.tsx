import React from 'react';
import {Text, View} from 'react-native';
import styles from './Section.style';

interface SectionProps {
  time: string;
  temperature: string;
}

const Section: React.FC<SectionProps> = ({time, temperature}) => {
  return (
    <View style={styles.section}>
      <Text style={{...styles.text}}>{temperature}</Text>
      <Text style={styles.text}>{time}</Text>
    </View>
  );
};

export default Section;
