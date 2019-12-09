import {PostAPI} from "../API/API";

const GET_POSTS = `THE_BLOG/POSTS/GET_POSTS`;

const getPostsAC = posts => ({type: GET_POSTS, posts});

export const GetPostsThunk = () => async dispatch => {
    try {
        let response = await PostAPI.getPosts();
        // dispatch(getPostsAC(response))
    debugger
    } catch (err) {
        console.log(err)
    }
};

let initialState = {
    posts: []
};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.posts
            };
        default:
            return state;
    }
};

export default PostReducer;