import {
    FETCH_TOP_ARTISTS_REQUEST,
    FETCH_TOP_ARTISTS_SUCCESS,
    FETCH_TOP_ARTISTS_FAILURE,
} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
    page: null
};

export default fetchTopArtistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_ARTISTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_TOP_ARTISTS_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                page: null,
                error,
            };
        case FETCH_TOP_ARTISTS_SUCCESS:
            const { items, page } = action.payload;
            return {
                ...state,
                items: [...state.items, ...items],
                page,
                loading: false,
                error: null,
            };
        default:
            return state;
    }
}