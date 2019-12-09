import React from 'react';
import PostsContainer from "./Posts/PostsContainer";
import {PostAdd} from "./PostAdd/PostAdd";
import css from "./PostsPage.module.css";
import cssOther from "./PostAdd/PostAdd.module.css";
import {PostUpdate} from "./PostUpdate/PostUpdate";
import {SearchById} from "./SearchById/SearchById";

export const PostsPage = ({addPost, getPostById, isPostUpdate = true}) => {
    return (
        <div className={css.PostsPage}>

            <div>
                <button onClick={addPost}
                        className={`${cssOther.button} ${css.showPostsButton}`}>
                    All posts
                </button>
                {isPostUpdate ? <PostUpdate/> : <PostAdd/>}
                <SearchById getPostById={getPostById}/>
            </div>

            <PostsContainer/>
        </div>
    )
};