import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;

export default TopListOfArtists = ({ title, items }) => {
    const { colors } = useTheme();

    return (
        <View style={style.container}>
            <Text style={{ ...style.headerText, color: colors.text }}>{title}</Text>
            <FlatList
                testID={"top-list-of-artists"}
                contentContainerStyle={style.flatListContentContainer}
                data={items}
                horizontal
                renderItem={({ item }) => {
                    return (
                        <View style={{ ...style.listItemContainer, backgroundColor: colors.card, borderColor: colors.border }}>
                            <Image source={{ uri: item.image[2]['#text'] }} style={style.image} />
                            <View style={style.artistContainer}>
                                <Text numberOfLines={1} style={{ ...style.artistText, color: colors.text }}>{item.name}</Text>
                                <Text style={{ color: colors.text }}>{item.artist.name}</Text>
                            </View>
                            <View style={style.listenerContainer}>
                                {
                                    item.listeners &&
                                    <Text style={{ color: colors.text }}>
                                        <Text>listeners: </Text>
                                        <Text>{item.listeners}</Text>
                                    </Text>
                                }
                                <Text style={{ color: colors.text }}>
                                    <Text>playcount: </Text>
                                    <Text>{item.playcount}</Text>
                                </Text>
                            </View>
                        </View>
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 20
    },
    headerText: {
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10
    },
    flatListContentContainer: {
    },
    listItemContainer: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        marginRight: 10,
        alignItems: 'center',
        width: windowWidth / 1.3
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10
    },
    artistContainer: {
        flex: 1,
        marginRight: 10
    },
    artistText: {
        fontWeight: '700',
    },
    listenerContainer: {
        flexShrink: 0
    }
});