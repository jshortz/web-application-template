import CommentForm from "./../../../../CommentForm.js";
import CommentList from "./../../../../CommentList.js";
import CommentsApi from "./../api/CommentApi";

class PostPage extends React.Component {
	state = {
		comments: [],
	}

	refreshComments() {
		CommentApi.get("comments")
			.then((response) => {
				const comments = response.data;

				this.setState({comments})

			})

	}
	componentDidMount() {
		console.log(newTask.name)
		this.refreshTasks();

	}

	handleNewComment(newComment) {
		this.refreshTasks();
	}

	render() {
		return(
			<div>
				<h1>TaskPage</h1>

					<PostCard/>
					<CommentList tasks={this.state.comments}/>
					<CommentForm onNewCommentCreated={(comment) => this.handleNewComment(comment)}/>
			</div>
		);

	}

}