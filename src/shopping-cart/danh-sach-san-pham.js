import React, { Component } from "react";
import SanPham from "./san-pham";

export default class DanhSachSanPham extends Component {
  renderListProduct = () => {
    const {listProduct} = this.props;
    return listProduct.map((product)=>{
      return <SanPham key={product.maSP} product={product} detailProduct={this.props.detailProduct} shopProduct={this.props.shopProduct}/>;
    })
  }
  render() {
    // console.log(this.props.listProduct);
    return (
      <div className="container">
        <div className="row">
          {this.renderListProduct()}
          {/* <SanPham />
          <SanPham />
          <SanPham /> */}
        </div>
      </div>
    );
  }
}
