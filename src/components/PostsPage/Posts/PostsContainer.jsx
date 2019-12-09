import React from "react";
import css from './Posts.module.css';
import {Post} from "./Post";
import {connect} from "react-redux";
import {GetPostsThunk} from "../../../Redux/Reducer";

class PostsContainer extends React.Component {
    render() {
        let posts = this.props.posts.map(item => {
            return <Post key={item._id} postId={item._id} title={item.title} text={item.text}/>
        });
        return (
            <div className={css.Posts}>
                <button onClick={() => this.props.GetPostsThunk()}>get</button>
                {posts}
            </div>
        )
    }
}

let mapStateToProps = state => ({posts: state.postState.posts});
export default connect(mapStateToProps, {GetPostsThunk})(PostsContainer);