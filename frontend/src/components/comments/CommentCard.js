import React from "react";
import CommentForm from "./CommentForm"

function CommentCard({post, onCommentClick}){
        const [isCommentDisplayed, setIsCommentDisplayed] = React.useState(false);

        const [commentBody, setCommentBody] = React.useState("");

        const handleComment = () => {
                // Invoke the passed in event callback
                onCommentClick({commentBody: commentBody});

                // Clear the input field
                setCommentBody("");
         };


    return (
        <div className="card mt-3">
            <div className="card-body">
    
                { isCommentDisplayed ?
                    <div className="form-group">
                    <CommentForm></CommentForm>
                    </div>

                    : ""
                }
                <button
                   className="btn btn-primary"
                   onClick={() => setIsCommentDisplayed(true)}>Comment
                </button>
            </div>



        </div>
    );
}

export default CommentCard;