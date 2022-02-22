import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { task, actions } from './Task.stories';
import TopListOfArtists from '../../../src/components/TopListOfArtists';

export const defaultDatas = [
    {
        name: "Blinding Lights",
        playcount: "16768685",
        listeners: "963436",
        url: "https://www.last.fm/music/The+Weeknd/_/Blinding+Lights",
        streamable: "0",
        artist: {
            name: "The Weeknd",
            mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
            url: "https://www.last.fm/music/The+Weeknd"
        },
        image: [
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "small"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "medium"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "large"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "extralarge"
            }
        ],
    },
    {
        name: "The Hills",
        playcount: "7954484",
        listeners: "796188",
        url: "https://www.last.fm/music/The+Weeknd/_/The+Hills",
        streamable: "0",
        artist: {
            name: "The Weeknd",
            mbid: "c8b03190-306c-4120-bb0b-6f2ebfc06ea9",
            url: "https://www.last.fm/music/The+Weeknd"
        },
        image: [
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "small"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "medium"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "large"
            },
            {
                "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                size: "extralarge"
            }
        ],
    },
];

storiesOf('TopListOfArtists', module)
    .addDecorator(story => <View>{story()}</View>)
    .add('Tracks', () => <TopListOfArtists title="Top Tracks List" items={defaultDatas} />)