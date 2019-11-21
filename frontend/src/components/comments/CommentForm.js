import React from "react";
import CommentsApi from "./../api/CommentApi";


class CommentForm extends React.Component {
	state = {
		body: "",
	}

	async handleComment() {

		const commentData = {
			name: this.state.body,
		}

		const commentResponse = await CommentApi.post("/comments", commentData);
		const comment = commentResponse.data;
		this.props.onNewCommentCreated(name);

	}

	render() {
		return (
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
		)
	}
}

export default CommentForm;