import React from "react",
import CommentsApi from "./../api/CommentApi";


class CommentsList extends React.Component{

	render() {
		return (
			<h5>Comments</h5>
			{
				this.props.comments.map(
					comments => comment.name + ",")
			}
		)
	}
}