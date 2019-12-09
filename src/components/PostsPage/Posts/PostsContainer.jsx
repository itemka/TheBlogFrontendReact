import React from "react";
import css from './Posts.module.css';
import {Post} from "./Post";
import {connect} from "react-redux";

class PostsContainer extends React.Component {
    render() {
        let posts = this.props.posts.map(item => <Post key={item._id}
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
export default connect(mapStateToProps, {})(PostsContainer);