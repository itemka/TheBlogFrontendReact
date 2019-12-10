import React from 'react';
import css from './PostAdd.module.css';

export class PostAdd extends React.Component {
    state = {
        title: '',
        text: '',
    };

    titleChange = event => this.setState({title: event.currentTarget.value});
    textChange = event => this.setState({text: event.currentTarget.value});
    createPost = () => this.props.createPost(this.state.title, this.state.text);

    render() {
        return (
            <div className={css.AddPost}>
                <p><b style={{fontSize: `1.6em`}}>Add new Post:</b></p>
                <div>Title:</div>
                <input onChange={this.titleChange} className={css.input}
                       placeholder={`Enter new title:`} type="text"/>
                <div>Text:</div>
                <textarea onChange={this.textChange}
                          className={css.input} type="text" rows={5}
                          placeholder={`Enter new text:`}/>
                <div>
                    <button onClick={this.createPost} className={`${css.button} ${css.addPostButton}`}>Send</button>
                </div>
            </div>
        )
    }
}