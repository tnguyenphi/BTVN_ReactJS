import React, { Component } from 'react'

export default class RenderingElements extends Component {
    username = "CyberSoft";
    age = "18";
    Name = "Phi";
    class = "BC-20";

    renderInfo() {
        return(
            <div>
                <p>{this.username} - {this.age}</p>    
                <p>{this.Name} - {this.class}</p>
            </div>
        )
    }
    render() {
        return (
            <div>
                <h3>*RenderingElements</h3>
                {this.renderInfo()}
            </div>
        )
    }
}
