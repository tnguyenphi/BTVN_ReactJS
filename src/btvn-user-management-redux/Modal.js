import React, { Component } from "react";
import {connect} from "react-redux"

class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      type: "User"
    }
    this.closeModal = React.createRef();
    console.log("constructor");
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;
    // console.log(event.target.name, event.target.value);
    // console.log(name,value);
    this.setState({
      [name]: value,
    })
    // this.setState({
    //   [name]: value,
    // },()=>{console.log(this.state)})
    // this.setState({
    //   fullname:event.target.value,
    // });
  }
  // handleOnChangeName = (event) => {
  //   // console.log(event.target.value);
  //   this.setState({
  //     username:event.target.value,
  //   });
  // }
  handleSubmit = (event) => {
    //ngăn chạn việc load trang
    event.preventDefault();
    
    // this.props.getUserSubmit(this.state)
    this.props.onSubmit(this.state);
    this.closeModal.current.click();
  }
  // thuc hien setstate cac props se thay doi trong tuong lai
  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    if (nextProps && nextProps.userEdit) {
      this.setState({
        id: nextProps.userEdit.id,
        fullname: nextProps.userEdit.fullname,
        username: nextProps.userEdit.username,
        email: nextProps.userEdit.email,
        phoneNumber: nextProps.userEdit.phoneNumber,
        type: nextProps.userEdit.type,
      });
    } else {
      this.setState({
        id: "",
        fullname: "",
        username: "",
        email: "",
        phoneNumber: "",
        type: "User"
      })
    }
  }

  render() {
    // console.log(this.props.userEdit);
    //khong setstate trong ham render
    return (
      <div
        className="modal fade"
        id="modelIdUser"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {this.props.userEdit ? "EDIT USER" : "ADD USER"}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                ref={this.closeModal}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" name="username" onChange={this.handleOnChange} value={this.state.username} />
                </div>
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" name="fullname" onChange={this.handleOnChange} value={this.state.fullname} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" name="email" onChange={this.handleOnChange} value={this.state.email} />
                </div>
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" name="phoneNumber" onChange={this.handleOnChange} value={this.state.phoneNumber} />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <select className="form-control" name="type" onChange={this.handleOnChange} value={this.state.type} >
                    <option>USER</option>
                    <option>VIP</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEdit: state.userReducer.userEdit,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    onSubmit:(user) =>{
      const action = {
        type: "SUBMIT_USER",
        payload: user,
      }
      dispatch(action)
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (Modal);
