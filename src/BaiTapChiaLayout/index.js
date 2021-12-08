import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import ProductPhone from "./productphone";
import ProductLap from "./productLap";
import Footer from "./footer";
function BaiTapChiaLayout (){
    return(
        <div class="bg-dark">
            <Header/>
            <Carousel/>
            <ProductPhone/>
            <ProductLap/>
            <Footer/>
        </div>
    )
}
export default BaiTapChiaLayout;