import React from "react";
import CommentCard from "../comments/CommentCard"

function PostCard({post, onDeleteClick, onCommentClick}){
        const [isCommentDisplayed, setIsCommentDisplayed] = React.useState(false);

        const [commentBody, setCommentBody] = React.useState("");

        const handleComment = () => {
                // Invoke the passed in event callback
                onCommentClick({commentBody: commentBody});

                // Clear the input field
                setCommentBody("");
         };


    return (
        <div id= "contentCommentForm" className="card mt-3">
            <div className="card-body">
                <p>
                    {post.body}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={onDeleteClick}>Delete
                </button>
                <CommentCard></CommentCard>
            </div>

        </div>
        
    );
}

export default PostCard;