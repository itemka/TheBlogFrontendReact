import React from "react";
import css from './Posts.module.css';
import {Post} from "./Post";
import {connect} from "react-redux";
import {DeletePostThunk} from "../../../Redux/Reducer";

class PostsContainer extends React.Component {
    render() {
        let posts = this.props.posts.map(item => <Post key={item._id}
                                                       deletePost={this.props.DeletePostThunk}
                                                       SetIsPostUpdate={this.props.SetIsPostUpdate}
                                                       postId={item._id}
                                                       title={item.title}
                                                       text={item.text}/>);

        return (
            <div className={css.Posts}>
                {posts}
            </div>
        )
    }
}

let mapStateToProps = state => ({posts: state.postState.posts});
export default connect(mapStateToProps, {DeletePostThunk})(PostsContainer);