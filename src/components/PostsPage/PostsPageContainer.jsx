import React from 'react';
import {connect} from "react-redux";
import {getPostByIdThunk, GetPostsThunk} from "../../Redux/Reducer";
import {PostsPage} from "./PostsPage";

class PostsPageContainer extends React.Component {
    componentWillMount() {
        this.props.GetPostsThunk();
    }

    getPosts = () => this.props.GetPostsThunk();

    render() {
        return (
            <PostsPage addPost={this.getPosts}
                       getPostById={this.props.getPostByIdThunk}/>
        )
    }
}

export default connect(null, {GetPostsThunk, getPostByIdThunk})(PostsPageContainer);