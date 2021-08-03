import React, {useState} from 'react';
import {
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchWeeklyWeather} from '../../store/thunk/asyncFetchWeather';
import styles from './Search.style';

const Search: React.FC = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [city, setCity] = useState('');

  const searchCityHandler = () => {
    Keyboard.dismiss();
    setLoading(true);
    dispatch(fetchWeeklyWeather(city.trim()));
    setCity('');
    setLoading(false);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Enter a City"
        placeholderTextColor="#999"
        style={styles.searchInput}
        onChangeText={setCity}
        value={city}
      />
      <TouchableOpacity style={styles.container} onPress={searchCityHandler}>
        {loading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Image
            source={require('../../assets/loupe.png')}
            style={styles.searchIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Search;
