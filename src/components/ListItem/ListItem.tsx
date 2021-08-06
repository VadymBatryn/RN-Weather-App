import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './ListItem.style';
import {
  DetailsScreenNavigationProp,
  WeatherStackScreenTypes,
} from '../../navigation/WeatherNavigation';

interface ListItemsProps {
  title: string;
  temperature: string;
  date: number;
}
const ListItem: React.FC<ListItemsProps> = ({title, temperature, date}) => {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate(WeatherStackScreenTypes.Details, {date: date});
  };

  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.itemText}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>{temperature}</Text>
    </View>
  );
};

export default ListItem;
