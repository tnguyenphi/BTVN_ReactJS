import React, { Component } from 'react'

export default class ChangeColorCar extends Component {
    constructor (props){
        super(props);
        this.state = {
            img:"./img/imgRedCar.jpg",
        };
    }
    // RedCar = () =>{
    //     this.setState({
    //         img: "./img/imgRedCar.jpg",
    //     })
    // }
    // BlackCar = () =>{
    //     this.setState({
    //         img: "./img/imgBlackCar.jpg",
    //     })
    // }
    // SilverCar = () =>{
    //     this.setState({
    //         img: "./img/imgSilverCar.jpg",
    //     })
    // }
    changeColor = (img)=>{
        this.setState({
            img,
        });
    }
    render() {
        const {img} = this.state;
        return (
            <div className = "container">
                <h3>ChangeColorCar</h3>
                <div className = "row">
                    <div className = "col-md-6">
                        <img className = "img-fluid" src={img}/>
                    </div>
                    {/* <div>
                        <button className= "btn btn-danger" onClick={this.RedCar}>Red</button>
                        <button className= "btn btn-light mx-3" onClick={this.SilverCar}>Silver</button>
                        <button className= "btn btn-dark" onClick={this.BlackCar}>Black</button>
                    </div> */}
                    <div>
                        <button className= "btn btn-danger" onClick={()=>{this.changeColor("./img/imgRedCar.jpg")}}>Red</button>
                        <button className= "btn btn-light mx-3" onClick={()=>{this.changeColor("./img/imgSilverCar.jpg")}}>Silver</button>
                        <button className= "btn btn-dark" onClick={()=>{this.changeColor("./img/imgBlackCar.jpg")}}>Black</button>
                    </div>
                </div>
            </div>
        )
    }
}
