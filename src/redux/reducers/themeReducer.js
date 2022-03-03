import {
    SET_THEME,
} from '../actions/actionTypes'

const initialState = {
    theme: '',
};

export default fetchTopTracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_THEME:
            const { theme } = action.payload;
            return {
                ...state,
                theme: theme,
            };
        default:
            return state;
    }
}