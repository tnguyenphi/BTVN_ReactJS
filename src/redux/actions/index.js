import {DELETE_USER,EDIT_USER,SUBMIT_USER,GET_KEYWORD} from "../contants"
import * as ActionType from "../contants"

const actDeleteUser = (user) => {
    const action = {
        // type: DELETE_USER,
        type: ActionType.DELETE_USER,
        payload: user,
    };
    return action;
}

const actEditUSer = (user) => {
    const action = {
        type: EDIT_USER,
        payload: user,
    }
    return action;
}

const actOnSubmit = (user) => {
    return {
        type: SUBMIT_USER,
        payload: user,
    }
}

const actGetKeyWord = (key) => {
    return{
        type: GET_KEYWORD,
        payload: key,
    };
}


export { actDeleteUser,actEditUSer,actOnSubmit,actGetKeyWord };