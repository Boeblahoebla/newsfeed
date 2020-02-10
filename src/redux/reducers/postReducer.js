// Initial posts state
const initialState = {
    posts: null,
    loading: false
};

// Reduce the state according to action.type
export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_POSTS":
            return {
                ...state,
                posts: action.payload,
                loading: false
            };
        case "SET_POSTS_LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state
    }
};