import React, { useEffect } from 'react';
import { Button, View, Text, Appearance } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './src/redux/store';
import { Provider } from 'react-redux';
import RootNavigator from './src/navigators/RootNavigator';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}

export default App;

//export { default } from './storybook';
