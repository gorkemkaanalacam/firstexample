import React from 'react';
import { StyleSheet, View } from 'react-native';
import TopArtistList from '../containers/TopArtistList';

export default HomeScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <TopArtistList onPressItem={(item) => navigation.navigate('Details', { item })} />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});