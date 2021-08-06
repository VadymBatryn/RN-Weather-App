import {combineReducers, configureStore} from '@reduxjs/toolkit';
import WeatherReducer from './slice/weatherAppSlice';

export const rootReducer = combineReducers({
  weather: WeatherReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
