// Initial auth state
const initialState = {
    isAuthenticated: false
};

// Reduce the state according to action.type
export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state
    }
};