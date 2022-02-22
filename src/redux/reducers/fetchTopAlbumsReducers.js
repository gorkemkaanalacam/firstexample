import {
    FETCH_TOP_ALBUMS_REQUEST,
    FETCH_TOP_ALBUMS_SUCCESS,
    FETCH_TOP_ALBUMS_FAILURE,
} from '../actions/actionTypes'

const initialState = {
    items: [],
    loading: false,
    error: null,
};

export default fetchTopAlbumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TOP_ALBUMS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_TOP_ALBUMS_FAILURE:
            const { error } = action.payload;
            return {
                ...state,
                loading: false,
                error,
            };
        case FETCH_TOP_ALBUMS_SUCCESS:
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