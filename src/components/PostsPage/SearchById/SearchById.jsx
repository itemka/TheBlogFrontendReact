import React from 'react';
import css from "../PostAdd/PostAdd.module.css";

export class SearchById extends React.Component {
    state = {
        inputData: '',
    };

    inputChange = event => this.setState({inputData: event.currentTarget.value});
    getPostById = () => {
        if (this.state.inputData !== ``) this.props.getPostById(this.state.inputData)
    };

    render() {
        return (
            <div className={css.AddPost}>
                <p><b style={{fontSize: `1.6em`}}>Search by id:</b></p>
                <div>ID:</div>
                <input className={css.input}
                       onChange={this.inputChange}
                       value={this.state.inputData}
                       placeholder={`Enter id:`}
                       type="text"/>
                <div>
                    <button onClick={this.getPostById}
                            className={`${css.button} ${css.searchPostButton}`}>Search
                    </button>
                </div>
            </div>

        )
    }
}