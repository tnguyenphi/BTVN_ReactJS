import React from "react";
import Card from "./card";

export default function ProductPhone() {
    return (
        <section id="smartphone" class="container-fluid pt-5 pb-5">
            <h1 class="text-white text-center">BEST SMARTPHONE</h1>
            <div class="row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}