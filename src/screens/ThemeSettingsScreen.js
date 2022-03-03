import React from 'react';
import { View, Text, Button } from 'react-native';
import { setTheme } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

export default ThemeSettingsScreen = () => {
    const { theme } = useSelector(state => state.theme);
    const dispatch = useDispatch();

    const { colors } = useTheme();

    return (
        <View style={{ flex: 1, margin: 20 }}>
            <Text style={{ color: colors.text, marginBottom: 10, fontWeight: '700', textAlign: 'center' }}>{'You are using ' + theme + ' theme'}</Text>
            <Button title="Change Theme" onPress={() => dispatch(setTheme(theme === "dark" ? 'default' : 'dark'))} />
        </View>
    )
}
