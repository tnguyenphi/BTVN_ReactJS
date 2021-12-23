import React, { Component } from 'react'

export default class Child extends Component {
    constructor (props){
        super(props);
        this.state={
            numberChild:5,
            userName: "CyberSoft",
        };
        this.interval = null;
    }
    // UNSAFE_componentWillReceiveProps(nextProps){
    //     console.log("UNSAFE_componentWillReceiveProps",nextProps);
    // }

    static getDerivedStateFromProps(nextProps,currentState){
        console.log("getDerivedStateFromProps",nextProps,currentState);
        if(nextProps.number === currentState.numberChild){
            //cap nhat lai state "username"
            return{
                userName:"Nguyen Phi",
            };
        }
        return null;
    }

    componentDidMount(){
        this.interval =  setInterval(()=>{
            console.log("Hello");
        },1000)
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
        clearInterval (this.interval);
    }



    render() {
        return (
            <div>
                <h3>Child</h3>
                <p>UserName:{this.state.userName} - NumberChild:{" "}{this.state.numberChild}</p>
            </div>
        )
    }
}
