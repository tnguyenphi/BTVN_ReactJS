import React, { Component } from 'react'

export default class State extends Component {
    constructor (props){
        super(props);
        this.state = {
            username : "Cybersoft",
            isLogin : false,
        };
    }

    handleLogin = () => {
        this.setState({
            isLogin: true,
        },()=>{
            console.log(this.state.isLogin)
        });
        // console.log(this.state.isLogin);//false(đáng lẽ phải ra true) bị bất đồng bộ do this.setState bị bất đồng bộ phải console trong hàm setState để coi đc
    }
    handleLogout = () => {
        this.setState({
            isLogin: false,
        })
    }
    renderHTML(){
        //toán tử 3 ngôi dk? "đúng" : "sai"
        return this.state.isLogin ?(
            <div>
                    <h1>Hello {this.state.username}</h1>
                    <button className="btn btn-danger" onClick={this.handleLogout}>Log Out</button>
            </div>
        ) : (
            <div>
                    <h1>Vui Lòng Login</h1>
                    <button className="btn btn-success" onClick={this.handleLogin}>Log In</button>
            </div>
        );
    }
    render() {
        return (
            <div>
               <h3>State</h3>  
               {this.renderHTML()}
            </div>
        )
    }
}
