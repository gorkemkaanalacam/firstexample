import React, { useEffect } from 'react';
import { Appearance, Button } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';
import { setTheme } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
  const { theme } = useSelector(state => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTheme(Appearance.getColorScheme()));
  }, []);

  return (
    <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={({ navigation }) => ({
            title: "Top Artist List",
            headerRight: () => <Button title="Theme" onPress={() => navigation.navigate("ThemeSettings", {})} />,
          })}
          component={HomeScreen}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="ThemeSettings" component={ThemeSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
