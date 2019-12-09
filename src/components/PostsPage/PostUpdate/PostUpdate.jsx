import React from 'react';
import css from '../PostAdd/PostAdd.module.css';
import style from '../Posts/Posts.module.css';

export const PostUpdate = () => {
    return (
        <div className={css.AddPost}>
            <p><b style={{fontSize: `1.6em`}}>Update Post:</b></p>
            <div>Title:</div>
            <input className={css.input} placeholder={`Enter new title:`} type="text"/>
            <div>Text:</div>
            <textarea className={css.input} type="text" rows={5} placeholder={`Enter new text:`}/>
            <div>
                <button className={`${css.button} ${style.postEdit}`}>Update</button>
            </div>
        </div>
    )
};