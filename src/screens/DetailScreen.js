import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import TopListOfArtists from '../components/TopListOfArtists';
import { fetchTopAlbumsAction, fetchTopTracksAction } from '../redux/actions';

export default DetailsScreen = ({ navigation, route }) => {
    const { topAlbums, topTracks } = useSelector(state => state);
    const dispatch = useDispatch();
    const { colors } = useTheme();

    const artist = route.params.item;

    useEffect(() => {
        console.log("colors", colors);
        navigation.setOptions({ title: artist.name })
        dispatch(fetchTopAlbumsAction(artist.name));
        dispatch(fetchTopTracksAction(artist.name));
    }, []);

    return (
        <View style={style.container}>
            <View style={{ ...style.headerContainer, borderColor: colors.border, backgroundColor: colors.card }}>
                <Image source={{ uri: artist.image[2]['#text'] }} style={style.image} />
                <Text style={{ ...style.headerText, color: colors.text }}>{artist.name}</Text>
            </View>
            <View style={style.listContainer}>
                {
                    topAlbums.loading ?
                        <ActivityIndicator color={colors.primary} size={36} />
                        :
                        <TopListOfArtists title="Top Albums" items={topAlbums.items} />
                }
                {
                    topTracks.loading ?
                        <ActivityIndicator color={colors.primary} size={36} />
                        :
                        <TopListOfArtists title="Top Tracks" items={topTracks.items} />
                }
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headerContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 1
    },
    listContainer: {
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 20
    },
    headerText: {
        fontWeight: '700'
    }
});