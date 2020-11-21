import auth from "./auth";
import posts from "./posts";
import alumni from "./alumni";
import events from "./events";
import {combineReducers} from "redux";
import  notes from "./notes"

const unillegeApp = combineReducers({
    posts, auth, alumni, events, notes
})

export default unillegeApp;
