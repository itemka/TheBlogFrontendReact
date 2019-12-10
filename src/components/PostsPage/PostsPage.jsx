import React, {useState} from 'react';
import PostsContainer from "./Posts/PostsContainer";
import {PostAdd} from "./PostAdd/PostAdd";
import css from "./PostsPage.module.css";
import cssOther from "./PostAdd/PostAdd.module.css";
import {SearchById} from "./SearchById/SearchById";
import PostUpdate from "./PostUpdate/PostUpdate";

export const PostsPage = ({addPost, getPostById, createPost}) => {
    let [isPostUpdate, setIsPostUpdate] = useState(false);
    let [updatePostID, setUpdatePost] = useState('');
    let SetIsPostUpdate = postId => {
        setIsPostUpdate(!isPostUpdate);
        setUpdatePost(postId);
    };
    return (
        <div className={css.PostsPage}>

            <div>
                <button onClick={addPost}
                        className={`${cssOther.button} ${css.showPostsButton}`}>
                    All posts
                </button>
                {isPostUpdate ? <PostUpdate updatePostID={updatePostID}/> : <PostAdd createPost={createPost}/>}
                <SearchById getPostById={getPostById}/>
            </div>

            <PostsContainer SetIsPostUpdate={SetIsPostUpdate}/>
        </div>
    )
};