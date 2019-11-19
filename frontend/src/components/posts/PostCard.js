import React from "react";

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
        <div className="card mt-3">
            <div className="card-body">
                <p>
                    {post.body}
                </p>
                <button
                    className="btn btn-danger"
                    onClick={onDeleteClick}>Delete
                </button>
            </div>
            <div className="card-body">
                <button
                   className="btn btn-primary"
                   onClick={() => setIsCommentDisplayed(true)}>Comment
                </button>
                { isCommentDisplayed ?
                    <div className="form-group">
                    <textarea
                       className="form-control"
                       value={commentBody}
                       onChange={e => setCommentBody(e.target.value)} />
                    <div className="form-group">
                           <button className="btn btn-primary"
                           onClick={onCommentClick}>Save Comment
                           </button>
                        </div>
                    </div>

                    : ""
                }

            </div>



        </div>
    );
}

export default PostCard;