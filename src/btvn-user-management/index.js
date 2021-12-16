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
      keyword: "",
      userEdit: null,
    }
  }
  _findIndex = (id) => {
    return this.state.listUser.findIndex((user) => {
      return user.id === id;
    });
  }
  // _findIndex = (id) => this.state.listUser.findIndex((user) => user.id === id);

  userDelete = (user) => {
    //data tu userItem
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

  //Add& Update user
  handleSubmit = (user) => {
    let listUser = [...this.state.listUser]
      
    if (user.id) {
      //UPDATE
      const index = this._findIndex(user.id)
      if (index !== -1) {
        listUser[index] = user;
      }

    } else {
      //ADD
      // user.id = new Date().getTime();
      const userNew = { ...user, id: new Date().getTime() };
      // console.log(user);
      listUser.push(userNew);
      // console.log(listUser);
    }

    this.setState({
      listUser,
    }, () => {
      console.log(this.state.listUser);
    })
  }

  handleGetKeyWord = (keyword) => {
    // console.log(keyword);

    // console.log(listUser);
    this.setState({
      keyword,
    });
  }

  handleUserEdit = (user) => {
    console.log(user);
    this.setState({
      userEdit: user,
    });
  }

  render() {
    let { listUser, keyword } = this.state;
    listUser = this.state.listUser.filter((user) => {
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
    });

    // console.log(listUser);

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search getKeyWord={this.handleGetKeyWord} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit: null,
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users listUser={listUser} getUserDelete={this.userDelete} getUserEdit={this.handleUserEdit} />
        <Modal getUserSubmit={this.handleSubmit} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
