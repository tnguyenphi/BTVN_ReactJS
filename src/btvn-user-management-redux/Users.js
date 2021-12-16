import React, { Component } from "react";
import UserItem from "./UserItem";
import {connect} from "react-redux"


class Users extends Component {
  renderListUser =()=>{
    let {listUser,keyword} = this.props;
    listUser = listUser.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    });
    return listUser?.map((user)=>{
      return <UserItem 
      key = {user.id} 
      user={user} 
      // getUserDelete={this.props.getUserDelete} 
      // getUserEdit={this.props.getUserEdit}
      />
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

const mapStateToProps = (state) => {
  return {
    //key: value
    listUser: state.userReducer.listUser,
    keyword: state.userReducer.keyword,
  }
}

export default connect(mapStateToProps,null)(Users);
