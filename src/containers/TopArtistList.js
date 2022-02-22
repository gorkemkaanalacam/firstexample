import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopArtistsAction } from '../redux/actions';
import { useTheme } from '@react-navigation/native';

export default TopArtistList = ({ onPressItem }) => {
    const { items, loading, page } = useSelector(state => state.topArtists);
    const dispatch = useDispatch();

    const { colors } = useTheme();

    useEffect(() => {
        dispatch(fetchTopArtistsAction());
    }, []);

    return (
        <FlatList
            contentContainerStyle={style.flatListContentContainer}
            data={items}
            onEndReached={() => {
                if (!loading) {
                    dispatch(fetchTopArtistsAction(page + 1));
                }
            }}
            ListHeaderComponent={() => {
                return <Text style={{ ...style.headerText, color: colors.text }}>Top Artist List</Text>
            }}
            ListFooterComponent={() => loading && <ActivityIndicator color='#000' size={36} />}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => onPressItem(item)}>
                        <View style={{ ...style.listItemContainer, backgroundColor: colors.card, borderColor: colors.border }}>
                            <Image source={{ uri: item.image[2]['#text'] }} style={style.image} />
                            <View style={style.artistContainer}>
                                <Text style={{ ...style.artistText, borderColor: colors.border, color: colors.text }}>Artist</Text>
                                <Text style={{ color: colors.text }}>{item.name}</Text>
                            </View>
                            <View style={style.listenerContainer}>
                                <Text style={{ color: colors.text }}>
                                    <Text>listeners: </Text>
                                    <Text>{item.listeners}</Text>
                                </Text>
                                <Text style={{ color: colors.text }}>
                                    <Text>playcount: </Text>
                                    <Text>{item.playcount}</Text>
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const style = StyleSheet.create({
    headerText: {
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 20,
    },
    flatListContentContainer: {
        padding: 20
    },
    listItemContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        marginBottom: 10,
        alignItems: 'center'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    artistContainer: {
        width: '40%'
    },
    artistText: {
        borderBottomWidth: 1,
        marginRight: 20,
        marginBottom: 5
    },
    listenerContainer: {
        width: '50%'
    }
});