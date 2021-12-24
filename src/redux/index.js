import {combineReducers} from "redux"
import userReducer from "./reducers/user"
import BaiTapOanXuXiReducer from "./reducers/BaiTapOanXuXiReducer";
import BaiTapDatVeReducer from "./reducers/BaiTapDatVeReducer";

const rootReducer = combineReducers({
    //combine các child Reducer
    // key :value
    userReducer, //userReducer:userReducer
    BaiTapOanXuXiReducer,//state bai tap oanxuxi
    BaiTapDatVeReducer, //state bai tap dat ve
});

export default rootReducer;

