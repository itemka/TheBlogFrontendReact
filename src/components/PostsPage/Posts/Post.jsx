import React from 'react';
import css from './Posts.module.css';

export const Post = ({postId, title, text}) => {
    return (
        <div className={css.Post}>
            <div className={css.delete}>
                <span>Edit</span><span>X</span>
            </div>
            <div>{`userId: ${postId}`}</div>
            <div className={css.postTitle}>{`Title: ${title}`}</div>
            <div className={css.postBody}><b>Text: {text}</b></div>
        </div>
    )
};