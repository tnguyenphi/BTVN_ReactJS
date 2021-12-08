import React from "react";
import CardLap from "./cardlap";

export default function ProductLap() {
    return (
        <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
            <h1 className="text-center">BEST LAPTOP</h1>
            <div className="row">
                <CardLap/>
                <CardLap/>  
                <CardLap/>  
                <CardLap/>      
            </div>
        </section>
    )
}