import {DELETE_USER} from "../contants"

const actDeleteUser = (user) => {
    const action = {
        type: DELETE_USER,
        payload: user,
    };
    return action;
}

const actEditUSer = (user) => {
    const action = {
        type: "EDIT_USER",
        payload: user,
    }
    return action;
}
export { actDeleteUser,actEditUSer };