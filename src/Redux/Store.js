import {applyMiddleware, combineReducers, createStore} from "redux";
import PostReducer from "./Reducer";
import thunk from "redux-thunk";

let CombineReducers = combineReducers({
    postState: PostReducer
});

const store = createStore(CombineReducers, applyMiddleware(thunk));
export default store;