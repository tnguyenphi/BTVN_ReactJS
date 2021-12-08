import React, { Component } from 'react'

export default class ExampleHandlingEvents extends Component {
    constructor (props){
        super(props);
        //binding 
        // this.handleLogin = this.handleLogin.bind(this);
    }
    username = "Cybersoft"
    isLogin = false;
    handleLogin = () => {
        this.isLogin = true;
        console.log(this.isLogin);
    }
    // renderHTML(){
    //     if (this.isLogin){
    //         return(
    //             <div>
    //                 <h1>Hello {this.username}</h1>
    //                 <button className="btn btn-danger">Log Out</button>
    //             </div>
    //         );
    //     }else
    //     return (
    //             <div>
    //                 <h1>Vui Lòng Login</h1>
    //                 <button className="btn btn-success">Log In</button>
    //             </div>
    //     )
    // }
    renderHTML(){
        //toán tử 3 ngôi dk? "đúng" : "sai"
        return this.isLogin ?(
            <div>
                    <h1>Hello {this.username}</h1>
                    <button className="btn btn-danger">Log Out</button>
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
                <h3>ExampleHandlingEvents</h3>
                {this.renderHTML()}
            </div>
        )
    }
}

