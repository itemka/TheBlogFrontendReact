import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import {PostsPage} from "../PostsPage/PostsPage";

const TheBlog = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/posts'}/>}/>
                <Route exact path='/posts' render={() => <PostsPage/>}/>
                <Route path='*' render={() => <Error404/>}/>
            </Switch>
        </>
    )
};

export default TheBlog;