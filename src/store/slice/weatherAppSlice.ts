import {createSlice} from '@reduxjs/toolkit';
import {weeklyWeather} from '../../models/weeklyWeather';
import {fetchWeeklyWeather} from '../thunk/asyncFetchWeather';

const weatherAppSlice = createSlice({
  name: 'weather',

  initialState: {
    cityName: '',
    todayData: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString(),
    weeklyWeather: null as weeklyWeather,
  },

  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWeeklyWeather.fulfilled, (state, action) => {
      if (action.payload?.data && action.payload.cityName) {
        state.weeklyWeather = action.payload.data;
        state.cityName = action.payload.cityName;
      }
    });
  },
});

export default weatherAppSlice.reducer;
export const {} = weatherAppSlice.actions;
