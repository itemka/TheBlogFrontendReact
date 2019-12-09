import React from 'react';
import css from './Posts.module.css';

export const Post = ({postId, title, text, deletePost}) => {
    let Delete = () => deletePost(postId);
    return (
        <div className={css.Post}>
            <div className={css.changeButton}>
                <span className={`${css.button} ${css.postEdit}`}>Edit</span>
                <span className={`${css.button} ${css.delete}`} onClick={Delete}>X</span>
            </div>
            <div>{`userId: ${postId}`}</div>
            <div className={css.postTitle}>{`Title: ${title}`}</div>
            <div className={css.postBody}><b>Text: {text}</b></div>
        </div>
    )
};