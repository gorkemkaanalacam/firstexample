import {
    FETCH_TOP_TRACKS_REQUEST,
    FETCH_TOP_TRACKS_SUCCESS,
    FETCH_TOP_TRACKS_FAILURE,
} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default fetchTopTracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_TRACKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_TOP_TRACKS_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case FETCH_TOP_TRACKS_SUCCESS:
            const { items } = action.payload;
            return {
                ...state,
                items,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}