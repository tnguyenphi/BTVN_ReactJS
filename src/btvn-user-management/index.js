import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser: data,
      listCart: []
    }
  }
  _findIndex = (id) => {
    return this.state.listUser.findIndex((user) => {
      return user.id === id;
    });
  }
  userDelete = (user) => {
    //nhan lai product tu modal
    // console.log(product);
    /**
     * tim kiem product
     * ton tai => splice(index,1)
     * cap nhat lai state
     */
    const index = this._findIndex(user.id)
    if (index !== -1) {
      let listUser = [...this.state.listUser];
      listUser.splice(index, 1);
      this.setState({
        listUser,
      })
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
          >
            Add User
          </button>
        </div>
        <Users listUser={this.state.listUser} userDelete={this.userDelete} />
        <Modal />
      </div>
    );
  }
}

export default Home;
