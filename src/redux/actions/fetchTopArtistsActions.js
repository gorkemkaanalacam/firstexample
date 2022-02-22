import {
    FETCH_TOP_ARTISTS_REQUEST,
    FETCH_TOP_ARTISTS_SUCCESS,
    FETCH_TOP_ARTISTS_FAILURE,
} from './actionTypes';

export const fetchTopArtistsRequest = () => ({
    type: FETCH_TOP_ARTISTS_REQUEST,
});

export const fetchTopArtistsFailure = error => ({
    type: FETCH_TOP_ARTISTS_FAILURE,
    payload: {
        error,
    },
});

export const fetchTopArtistsSuccess = (items, page) => ({
    type: FETCH_TOP_ARTISTS_SUCCESS,
    payload: {
        items,
        page,
    },
});

export const fetchTopArtistsAction = (page = 1) => async (dispatch) => {
    dispatch(fetchTopArtistsRequest());
    try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1dc0f82cd84d1ec838e8209542dbfebb&format=json&limit=51&page=${page}`);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchTopArtistsSuccess(data.artists.artist, page));
    } catch (e) {
        dispatch(fetchTopArtistsFailure(e.message));
    }
}