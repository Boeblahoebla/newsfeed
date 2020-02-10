// Imports
//////////

import axios from 'axios';


export const getPostsAction = () => dispatch => {

    setPostsLoading();

    axios.get('https://api.myjson.com/bins/95pka')
        .then(res => {
            dispatch({
                type: "GET_POSTS",
                payload: res.data
            })
        })
};


export const setPostsLoading = () => dispatch => {
    dispatch({
        type: "SET_POSTS_LOADING"
    })
};