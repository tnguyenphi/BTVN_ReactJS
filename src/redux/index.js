import {combineReducers} from "redux"
import userReducer from "./reducers/user"
import BaiTapOanXuXiReducer from "./BaiTapOanXuXiReducer"

const rootReducer = combineReducers({
    //combine các child Reducer
    // key :value
    userReducer, //userReducer:userReducer
    BaiTapOanXuXiReducer,
});

export default rootReducer;

