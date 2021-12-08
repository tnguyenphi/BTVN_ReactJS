import React, { Component } from 'react'

export default class Child extends Component {
    handleResetInfo = () => {
        const username = "CyberSoft";
        const age = 4;
        // console.log(username,age);
        this.props.resetInfo(username,age);
    }
    render() {
        // const propsUsername=this.props.username;
        // console.log(propsUsername);
        // console.log(this.props);
        const {username,age} = this.props;
        console.log(username);
        return (
            <div>
                <h3>Child Component</h3>
                <p>UserName: {username}</p>
                <p>age: {age}</p>
                <button className ="btn btn-danger" onClick={this.handleResetInfo}> Resett info</button>
            </div>
        )
    }
}
