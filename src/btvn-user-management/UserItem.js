import React, { Component } from "react";

class UserItem extends Component {
  deleteUser = () =>{
    this.props.userDelete(this.props.user)
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
          >
            Edit
          </button>
          <button className="btn btn-danger" onClick={this.deleteUser}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default UserItem;
