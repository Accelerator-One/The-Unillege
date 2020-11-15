import auth from "./auth";
import posts from "./posts";
import {combineReducers} from "redux";

const unillegeApp = combineReducers({
    posts, auth
})

export default unillegeApp;