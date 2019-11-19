import Api from "./Api";

class PostsApi {
    getAllPosts() {
        return Api.get('/posts');
    }

    getPostById(id) {
        return Api.get('/posts/'+id);
    }

    createPost(post) {
        return Api.post('/posts', post);
    }

    updatePost(post) {
        return Api.put('/posts', post);
    }

    deletePost(id) {
        return Api.delete('/posts/'+id);
    }

    commentPost(commentPost) {
            return Api.put('/posts/', commentPost);
        }
}

export default new PostsApi();