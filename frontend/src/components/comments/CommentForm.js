import React from "react";
import CommentsApi from "../../api/CommentApi";


class CommentForm extends React.Component {
	state = {
		body: "",
	}

	async handleComment() {

		const commentData = {
			body: this.state.body,
		}

		const commentResponse = await CommentsApi.createComment(commentData);
		const comment = commentResponse.data;

	}

	render() {
		return (
			<div className="form-group">
                                     <textarea
                                         className="form-control"
                                         value={this.state.body}
										 onChange={e => this.setState({body:e.target.value})}/>
										 <br/><br/>
                                     <div className="form-group">
                                         <button className="btn btn-primary"
                                             onClick={()=>this.handleComment()}>Save Comment
                                         </button>
                                     </div>
            </div>
		)
	}
}

export default CommentForm;