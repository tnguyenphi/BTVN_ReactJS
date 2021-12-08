import React, { Component } from 'react'
import Child from './child';
import ChildFnc from './childFnc';
import ChildrenCompoment from './children';

export default class Communication extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "CyberSoft",
            age: 4,
        };
    };
    changeName = () =>{
        this.setState({
            username: "Nguyen",
            age: 18,
        })
    }
    reset = (username, age) => {
        // ham reset nhan lai data tu compoment child
        console.log(username, age);
        // cap nhat lai state
        this.setState ({
            username, // username: username, viet lai la username
            age,
        })
    }
    render() {
        const {username, age} = this.state
        return (
            <div>
                <h3>Communication</h3>
                <p>Username: {username} - Age: {age}</p>
                <hr />
                <button className="btn btn-success" onClick ={this.changeName}> Change Info</button>
                <hr/>
                <Child username = {username} age={age} resetInfo ={this.reset}/>
                <hr/>
                <ChildFnc username={username} age={age}/>
                <hr/>
                <ChildrenCompoment>
                    <p>Username: {username} - Age: {age} </p>
                    <p>Username: {username} - Age: {age} </p>
                    <p>Username: {username} - Age: {age} </p>
                    <p>Username: {username} - Age: {age} </p>
                </ChildrenCompoment>
            </div>
        );
    }
}
