import {createAsyncThunk} from '@reduxjs/toolkit';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchWeeklyWeather} from './asyncFetchWeather';

const saveToStorage = createAsyncThunk(
  'weather/saveToStorage',
  async (cityName: string) => {
    try {
      await AsyncStorage.setItem('city', cityName);
    } catch (err) {
      console.log(err.message);
    }
  },
);

const fetchFromStorage = createAsyncThunk(
  'weather/fetchFromStorage',
  async (_, {dispatch}) => {
    try {
      const res = await AsyncStorage.getItem('city');
      if (res) {
        dispatch(fetchWeeklyWeather(res));
      }
    } catch (err) {
      console.log(err.message);
    }
  },
);

export {saveToStorage, fetchFromStorage};
