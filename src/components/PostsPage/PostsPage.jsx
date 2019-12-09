import React from 'react';
import PostsContainer from "./Posts/PostsContainer";
import {AddPost} from "./AddPost/AddPost";

export const PostsPage = () => {
    return (
        <>
            <AddPost/>
            <PostsContainer/>
        </>
    )
};