import { combineReducers } from "redux";
import isLoggedIn from './isLoggedIn'

const allreducers = combineReducers(
    {
        isLoggedIn
    }
);

export default allreducers;