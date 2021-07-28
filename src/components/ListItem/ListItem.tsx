import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import styles from './ListItem.style';

interface ListItemsProps {
  title: string;
  temperature: string;
}
const ListItem: React.FC<ListItemsProps> = ({title, temperature}) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Text style={styles.itemText}>{title}</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>{temperature}</Text>
    </View>
  );
};

export default ListItem;
