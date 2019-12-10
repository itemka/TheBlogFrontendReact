import React from 'react';
import css from '../PostAdd/PostAdd.module.css';
import style from '../Posts/Posts.module.css';
import {connect} from "react-redux";
import {UpdatePostThunk} from "../../../Redux/Reducer";

class PostUpdate extends React.Component {
    componentDidMount() {
        this.getDataFromPostById()
    }

    state = {
        title: ``,
        text: ``,
        updatePostID: this.props.updatePostID
    };

    getDataFromPostById = () => {
        let data = this.props.posts.find(item => item._id === this.props.updatePostID);
        this.setState({title: data.title, text: data.text});
    };
    titleChange = event => this.setState({title: event.currentTarget.value});
    textChange = event => this.setState({text: event.currentTarget.value});
    updatePost = () => this.props.UpdatePostThunk(this.state.updatePostID, this.state.title, this.state.text);

    render() {
        return (
            <div className={css.AddPost}>
                <p><b style={{fontSize: `1.6em`}}>Update Post:</b></p>
                <div>Title:</div>
                <input className={css.input}
                       onChange={this.titleChange}
                       onClick={this.titleChange}
                       value={this.state.title}
                       placeholder={`Enter new title:`}
                       type="text"/>
                <div>Text:</div>
                <textarea className={css.input}
                          onChange={this.textChange}
                          onClick={this.textChange}
                          value={this.state.text}
                          type="text" rows={5}
                          placeholder={`Enter new text:`}/>
                <div>
                    <button onClick={this.updatePost} className={`${css.button} ${style.postEdit}`}>Update</button>
                </div>
            </div>
        )
    }
}

let mapStateToProps = state => ({posts: state.postState.posts});
export default connect(mapStateToProps, {UpdatePostThunk})(PostUpdate);