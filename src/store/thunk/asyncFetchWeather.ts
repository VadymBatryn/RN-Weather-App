import {createAsyncThunk} from '@reduxjs/toolkit';

import Config from 'react-native-config';
import {saveToStorage} from './asyncStorageThunk';

export const fetchWeeklyWeather = createAsyncThunk(
  'weather/fetchWeeklyWeather',
  async (cityName: string, {dispatch}) => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${Config.WEATHER_API}`,
    );
    if (response.ok) {
      dispatch(saveToStorage(cityName));
      return {data: await response.json(), cityName: cityName};
    } else {
      console.log(response.status);
    }
  },
);
