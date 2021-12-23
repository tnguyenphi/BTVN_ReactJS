import React, { Component } from 'react'
import PureChild from './pure-child';
import Child from './child';

export default class LifeCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            number: 0,
            statusChild:true,
        }
        console.log("constructor - chạy 1 lần duy nhất "); 
    }
    UNSAFE_componentWillMount(){
        console.log("componentWillMount - chạy 1 lần duy nhất");
    }

    componentDidMount(){
        /**
         * call API
         */
        console.log("componentDidMount - chạy 1 lần duy nhất chạy sau render");
    }
    UNSAFE_componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate",nextProps, nextState);
        if(nextState.number === 2){
            return false;
        }
        return true;
    }

    render() {
        console.log("render");
        return (
            <div>
                <h3>LifeCycle</h3>
                <h1>{this.state.number}</h1>
                <button className='btn btn-success' 
                onClick={()=>{
                    this.setState({
                        number: this.state.number + 1 ,
                    })
                }}>
                    Click</button>
                    <hr/>
                <PureChild/>
                <hr/>
                {this.state.statusChild && <Child number={this.state.number}/>}
                <button className="btn btn-info"
                onClick={()=>{
                    this.setState({
                        statusChild:false,
                    });
                }}
                >Change Status Child</button>
            </div>
        )
    }
}
