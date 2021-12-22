// import {DELETE_USER,EDIT_USER,SUBMIT_USER,GET_KEYWORD} from "../contants"
import * as ActionType from "../contants"
let initialState = {
    listUser: [
        {
        "id": 1,
        "fullname": "Dinh Phuc Nguyen",
        "username": "dpnguyen",
        "email": "dpnguyen@gmail.com",
        "phoneNumber": "123456789",
        "type": "VIP"
        },
        {
        "id": 2,
        "fullname": "Nguyen Van A",
        "username": "vana",
        "email": "vana@gmail.com",
        "phoneNumber": "123456789",
        "type": "USER"
        }
    ],
    keyword: "",
    userEdit: null,
}
const userReducer = (state=initialState,action) => {
    // console.log(action);
    // if(action.type == "DELETE_USER"){
    //     //xu ly giai thuat xoa
    // }else if(action.type == "UPDATE_USER"){

    // }else if(){

    // }
    switch (action.type) {
        case ActionType.DELETE_USER :{
            let listUser = [...state.listUser]
            const index = state.listUser.findIndex((user)=> user.id === action.payload.id);
            if(index  !== -1){
                listUser.splice(index,1);
                console.log(listUser);
                //cap nhat lai state => tuong duong ham setState trong component
                state.listUser = listUser;
            }
            console.log(state);
            return {...state};
        }
        case ActionType.SUBMIT_USER :{
            let listUser = [...state.listUser];
            if(action.payload.id){
                //UPDATE
                const index = listUser.findIndex((user)=> user.id === action.payload.id);
                if(index !== -1){
                    listUser[index]=action.payload;
                }
            }else{
                //ADD
                const userNew = { ...action.payload, id: new Date().getTime() };
                listUser.push(userNew);
            }
            
            state.listUser = listUser;
            return {...state};
        }
        case ActionType.EDIT_USER:{
            state.userEdit = action.payload;
            return {...state};
        }
        case ActionType.GET_KEYWORD :{
            state.keyword=action.payload;
            return {...state};
        }
            
        default:
            return {...state};
    }


    // return {...state};
    //redux ko có hàm setState nên phải 
}
export default userReducer;











