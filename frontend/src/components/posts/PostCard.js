import React from "react";

function PostCard({post, onDeleteClick}) {
    return (
        <div className="card mt-3">
            <div className="card-body">
                <p class="postBodyStyle">
                    {post.body}
                </p>

                <button className="btn btn-danger" onClick={onDeleteClick} id="postDeleteButton">Delete</button>
            </div>
        </div>
    );
}

export default PostCard;