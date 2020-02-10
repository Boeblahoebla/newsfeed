// Imports
//////////

// Base dependencies
import React from 'react';

// Redux
import { connect } from "react-redux";

// Components
import Comments from '../comment/Comments';


// Post component
/////////////////

const Post = (props) => {

    // Fetch the post from the props
    const { post, auth } = props;

    return (
        <div className="" style={{marginBottom: "50px"}}>
            <div className="d-flex justify-content-between">
                <div>
                    <img src={post.avatar} alt={post.name} height='75px'/>
                </div>
                <div>
                    <h5>{post.name}</h5>
                </div>
            </div>
            <p className="lead">{post.body}</p>

            {/* Comments go here */}
            {auth.isAuthenticated && <Comments comments={post.comments} />}
        </div>
    );
};


// Map the Redux state to props
const mapStateToProps = state => ({
    auth: state.auth
});


// Export
/////////

export default connect(mapStateToProps)(Post);