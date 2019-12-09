import {PostAPI, sendRequest} from "../API/API";
import axios from "axios";

const GET_POSTS = `THE_BLOG/POSTS/GET_POSTS`;
const GET_POST_BY_ID = `THE_BLOG/POSTS/GET_POST_BY_ID`;
const CREATE_POST = `THE_BLOG/POSTS/CREATE_POST`;
const DELETE_POST = `THE_BLOG/POSTS/DELETE_POST`;
const UPDATE_POST = `THE_BLOG/POSTS/UPDATE_POST`;

const getPostsAC = posts => ({type: GET_POSTS, posts});
const getPostByIdAC = post => ({type: GET_POST_BY_ID, post});

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

let initialState = {
    posts: [],
    postById: null
};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        case GET_POST_BY_ID:
            return {
                ...state,
                posts: [action.post],
                postById: action.post
            };
        default:
            return state;
    }
};

export default PostReducer;