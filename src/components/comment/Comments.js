// Imports
//////////

// Base dependencies
import React from 'react';
import Post from "../post/Post";


// Comments component
/////////////////////

const Comments = (props) => {

    // Generate the comment items
    let comments = "";
    comments = props.comments.map(comment => (
        <div className="mb-4">
            <div className="mb-2">
                <img className="mr-4" src={comment.avatar} alt={comment.name} height="50px"/>
                <strong >{comment.name}</strong>
            </div>


            <p>{comment.comment}</p>
        </div>
    ));


    return (
        <div className="container pl-4 pb-2" style={{backgroundColor: "rgb(245,245,245)", borderRadius: "8px"}}>
            <h4 className="p-4">Comments</h4>
            {comments}
        </div>
    );
};

export default Comments;