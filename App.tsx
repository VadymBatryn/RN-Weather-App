import React from 'react';
import AppNavigation from './src/navigation/WeatherNavigation';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';

import {store} from './src/store/configureStore';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
