import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {Error404} from "../Error404/Error404";
import PostsPageContainer from "../PostsPage/PostsPageContainer";

const TheBlog = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => <Redirect to={'/posts'}/>}/>
                <Route exact path='/posts' render={() => <PostsPageContainer/>}/>
                <Route path='*' render={() => <Error404 whereToGo={`/posts`}/>}/>
            </Switch>
        </>
    )
};

export default TheBlog;