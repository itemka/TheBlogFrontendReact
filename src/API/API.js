import axios from 'axios';

const instance = axios.create({
    baseURL: `http://localhost:3000/`,
    withCredentials: true,
});

export const PostAPI = {
    getPosts: () => instance.get(`posts`),
    getPost: (postId) => instance.get(`posts/${postId}`),
    createPost: (postBody) => instance.post(`posts`, postBody),
    deletePost: (postId) => instance.delete(`posts/${postId}`),
    updatePost: (postId) => instance.put(`posts/${postId}`)
};