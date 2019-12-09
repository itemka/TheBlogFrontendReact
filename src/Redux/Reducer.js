import {PostAPI, sendRequest} from "../API/API";

const GET_POSTS = `THE_BLOG/POSTS/GET_POSTS`;
const GET_POST_BY_ID = `THE_BLOG/POSTS/GET_POST_BY_ID`;
// const CREATE_POST = `THE_BLOG/POSTS/CREATE_POST`;
const DELETE_POST = `THE_BLOG/POSTS/DELETE_POST`;
const UPDATE_POST = `THE_BLOG/POSTS/UPDATE_POST`;

const getPostsAC = posts => ({type: GET_POSTS, posts});
const getPostByIdAC = post => ({type: GET_POST_BY_ID, post});
// const createPostAC = postBody => ({type: CREATE_POST, postBody});
const deletePostAC = postId => ({type: DELETE_POST, postId});

export const GetPostsThunk = () => async dispatch => {
    try {
        let response = await PostAPI.getPosts();
        dispatch(getPostsAC(response));
    } catch (err) {
        console.log(`Error:`, err)
    }
};
export const getPostByIdThunk = postId => async dispatch => {
    try {
        let response = await PostAPI.getPostById(postId);
        dispatch(getPostByIdAC(response));
    } catch (err) {
        console.log(`Error:`, err)
    }
};
export const CreatePostThunk = (title, text) => async dispatch => {
    try {
        let data = {title: title, text: text};
        await PostAPI.createPost(data);
        dispatch(GetPostsThunk());
    } catch (err) {
        console.log(`Error:`, err)
    }
};
export const DeletePostThunk = postId => async dispatch => {
    try {
        await PostAPI.deletePost(postId);
        dispatch(deletePostAC(postId));
    } catch (err) {
        console.log(`Error:`, err)
    }
};

let initialState = {
    posts: [],
    postById: null
};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: [...action.posts]
            };
        case GET_POST_BY_ID:
            return {
                ...state,
                posts: [action.post],
                postById: action.post
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item._id !== action.postId)
            };
        default:
            return state;
    }
};

export default PostReducer;