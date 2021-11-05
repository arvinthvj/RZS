
import { combineReducers } from "redux";
import userState from "./userProfileReducer"

const reducers = combineReducers({
    userDetails: userState
})

export default reducers
