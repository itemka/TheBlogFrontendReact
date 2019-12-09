import React from "react";
import TheBlog from "./TheBlog";
import {Provider} from "react-redux";
import store from "../../Redux/Store";
import {BrowserRouter} from "react-router-dom";

export const TheBlogContainer = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <TheBlog/>
            </Provider>
        </BrowserRouter>
    )
};

export default TheBlogContainer;