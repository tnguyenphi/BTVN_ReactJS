import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderListUser =()=>{
    const {listUser} = this.props;
    return listUser.map((user)=>{
      return <UserItem key = {user.id} user={user} userDelete={this.props.userDelete}/>
    })
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListUser()}
            {/* <UserItem />
            <UserItem />
            <UserItem /> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
