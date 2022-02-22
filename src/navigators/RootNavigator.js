import React from 'react';
import { Appearance } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
  return (
    <NavigationContainer theme={Appearance.getColorScheme() === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: "Top Artist List" }} component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
