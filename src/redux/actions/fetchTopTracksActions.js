import {
    FETCH_TOP_TRACKS_REQUEST,
    FETCH_TOP_TRACKS_SUCCESS,
    FETCH_TOP_TRACKS_FAILURE,
} from './actionTypes';

export const fetchTopTracksRequest = () => ({
    type: FETCH_TOP_TRACKS_REQUEST,
});

export const fetchTopTracksFailure = error => ({
    type: FETCH_TOP_TRACKS_FAILURE,
    payload: {
        error,
    },
});

export const fetchTopTracksSuccess = items => ({
    type: FETCH_TOP_TRACKS_SUCCESS,
    payload: {
        items,
    },
});

export const fetchTopTracksAction = (artist) => async (dispatch) => {
    dispatch(fetchTopTracksRequest());
    try {
        const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=1dc0f82cd84d1ec838e8209542dbfebb&format=json`)
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        dispatch(fetchTopTracksSuccess(data.toptracks.track));
    } catch (e) {
        dispatch(fetchTopTracksFailure(e.message));
    }
}