import React, { Component } from 'react'
import ExampleHandlingEvents from './example';

export default class HandlingEvent extends Component {
    handlingEvent (){
        console.log(123);
    }

    handlingEventPram (username,age){
        console.log(username,age);
    }
    render() {
        return (
            <div>
                <h3>*HandlingEvent</h3>
                <button className="btn btn-success" onClick={this.handlingEvent}>HandlingEvent</button>
                <button className="btn btn-info" onClick={()=>{
                    console.log(456) 
                }}>HandlingEvent</button>
                <button className="btn btn-danger" onClick ={()=>{this.handlingEventPram("Cybersoft",18)}}>Handling Param</button>
                <ExampleHandlingEvents/>
            </div>
        )
    }
}
