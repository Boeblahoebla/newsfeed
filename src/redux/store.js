// Imports
//////////

// Redux
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

// Reducers
import { authReducer } from "./reducers/authReducer";
import { postReducer } from "./reducers/postReducer";


// Export
/////////

export const store = createStore(combineReducers({
    auth: authReducer,
    post: postReducer
}), compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

));