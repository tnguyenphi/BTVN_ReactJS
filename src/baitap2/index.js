import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import WWD from "./wwd";
import Contact from "./contact";
import ListCard from "./list-card"
import Footer from "./footer"

function BaiTap2(){
    return(
        <div>
            <Header/>
            <Carousel/>
            <div className="container">
                <div className="row container">
                    <WWD/>
                    <Contact/>
                </div>
            </div>
            <ListCard/>
            <Footer/>
        </div>
    )
}
export default BaiTap2;