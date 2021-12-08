import React from "react";
import Card from "./card"

export default function ListCard() {
    return (
        <div className = "container">
            <div className="row">
                <Card />
                <Card />
                <Card />
            </div>
        </div>

    )
}