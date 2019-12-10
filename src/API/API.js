import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:333/`,
});

export const PostAPI = {
    getPosts: () => instance.get('posts').then(response => response.data),
    getPostById: postId => instance.get(`posts/${postId}`).then(response => response.data),
    createPost: postBody => instance.post(`posts`, postBody),
    deletePost: postId => instance.delete(`posts/${postId}`),
    updatePost: (postId, postBody) => instance.put(`posts/${postId}`, postBody)
};