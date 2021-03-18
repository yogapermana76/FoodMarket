import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
  );
};

export default App;
