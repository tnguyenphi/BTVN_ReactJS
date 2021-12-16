import React, { Component } from "react";
import {connect} from "react-redux"
import { actDeleteUser } from "../redux/actions";
import { actEditUSer }   from "../redux/actions"

class UserItem extends Component {
  getUserDelete = () =>{
    this.props.getUserDelete(this.props.user)
    // console.log(this.props.user.id);
  }
  render() {
    const {user} = this.props;
    // console.log(user);
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            // onClick={()=>{this.props.getUserEdit(user)}}
            onClick={()=>{this.props.editUser(user)}}
          >
            Edit
          </button>
          <button 
          className="btn btn-danger" 
          onClick={()=>{this.props.deleteUser(user)}}
          >Delete</button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    deleteUser:(user) =>{
      dispatch(actDeleteUser(user))
    },
    editUser: (user)=>{
      actEditUSer(user);
      dispatch(actEditUSer(user))
    },
  };
};

export default connect(null,mapDispatchToProps) (UserItem);
