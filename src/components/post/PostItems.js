// Imports
//////////

// Base dependencies
import React, { useEffect } from 'react';

// Redux
import { connect } from 'react-redux';
import { getPostsAction } from "../../redux/actions/postActions";

// Components
import Post from './Post';


// PostItems component
//////////////////////

const PostItems = (props) => {

    console.log(props.post);

    // When the component mounts fetch the posts
    useEffect(() => {
        props.getPostsAction()
    },[]);


    // Generate the post items
    let postItemsContent = "";
    if(!props.post.posts || props.post.loading) {
        postItemsContent = "loading"
    } else {
        postItemsContent = props.post.posts.map(post => (
            <Post post={post} />
        ))
    }

    return (
        <div className="container mt-4">
            <h1 className="display-4 mb-4">News posts</h1>

            {/* Post items content goes here */}
            {postItemsContent}
        </div>
    );
};


// Map the Redux state to props
const mapStateToProps = state => ({
    post: state.post
});


// Export
/////////

export default connect(mapStateToProps, { getPostsAction })(PostItems);