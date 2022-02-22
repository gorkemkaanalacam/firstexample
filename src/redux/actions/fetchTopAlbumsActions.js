import {
    FETCH_TOP_ALBUMS_REQUEST,
    FETCH_TOP_ALBUMS_SUCCESS,
    FETCH_TOP_ALBUMS_FAILURE,
} from './actionTypes';

export const fetchTopAlbumsRequest = () => ({
    type: FETCH_TOP_ALBUMS_REQUEST,
});

export const fetchTopAlbumsFailure = error => ({
    type: FETCH_TOP_ALBUMS_FAILURE,
    payload: {
        error,
    },
});

export const fetchTopAlbumsSuccess = items => ({
    type: FETCH_TOP_ALBUMS_SUCCESS,
    payload: {
        items,
    },
});

export const fetchTopAlbumsAction = (artist) => async (dispatch) => {
    dispatch(fetchTopAlbumsRequest());
    try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=1dc0f82cd84d1ec838e8209542dbfebb&format=json`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchTopAlbumsSuccess(data.topalbums.album));
    } catch (e) {
        dispatch(fetchTopAlbumsFailure(e.message));
    }
}