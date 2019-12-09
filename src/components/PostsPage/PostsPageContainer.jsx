import React from 'react';
import {connect} from "react-redux";
import {CreatePostThunk, getPostByIdThunk, GetPostsThunk} from "../../Redux/Reducer";
import {PostsPage} from "./PostsPage";

class PostsPageContainer extends React.Component {
    componentDidMount() {
        this.props.GetPostsThunk();
    }

    getPosts = () => this.props.GetPostsThunk();

    render() {
        return (
            <PostsPage addPost={this.getPosts}
                       getPostById={this.props.getPostByIdThunk}
                       createPost={this.props.CreatePostThunk}/>
        )
    }
}

export default connect(
    null, {GetPostsThunk, getPostByIdThunk, CreatePostThunk}
)(PostsPageContainer);