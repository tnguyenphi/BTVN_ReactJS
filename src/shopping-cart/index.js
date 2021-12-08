import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props){
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: [],
    }
  }
  handleDetailProduct = (product) =>{
    //nhan product tu component SanPham truyen ra
    // console.log(product);
    //Cap nhat lai state => de con component render lai lan moi
    this.setState({
      detailProduct: product,
    })
  }
  _findIndex = (maSP) =>{
    return this.state.listCart.findIndex((item)=>{
      return item.maSP === maSP;
    });
  }
  handleShopProduct =(product)=> {
    // console.log(product);
    let listCart = [...this.state.listCart];

    //tim kiem product co ton tai trong state.listCart?
    
    // const index = this.state.listCart.findIndex((item)=>{
    //   return item.maSP === product.maSP;
    // });
    const index = this._findIndex(product.maSP)

    if(index !== -1){
      //tim thay => cap nhat lai so luon
      listCart[index].soLuong +=1;
    }else{
      //them product vao listCart
      const productCart = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        donGia: product.giaBan,
      };
      listCart.push(productCart);
    }

    
    this.setState({
      listCart,  //listCart:listCart;
    });
  }

  handleDelete = (product) => {
    //nhan lai product tu modal
    // console.log(product);
    /**
     * tim kiem product
     * ton tai => splice(index,1)
     * cap nhat lai state
     */
    const index = this._findIndex(product.maSP)
    if(index !== -1){
      let listCart = [...this.state.listCart];
      listCart.splice(index,1);
      this.setState({
        listCart,
      })
    }
  }
  productQuantity = (product, status) =>{
    console.log(product, status);
    const index = this._findIndex(product.maSP)
    // let listCart = [...this.state.listCart];

    // if (index !== -1 && status === true){
    //   listCart[index].soLuong +=1;
    // } else if (index !== -1 && status === false){
    //   listCart[index].soLuong -=1;
    // }
    if ( index !==-1){
      let listCart = [...this.state.listCart];
      if(status) {
        listCart[index].soLuong +=1;
      }else{
        if(listCart[index].soLuong>1){
          listCart[index].soLuong -=1;
        }
      }
      this.setState({
        listCart,
      })
    }

  }
  totalQuantity = () =>{
   return this.state.listCart.reduce((total, product)=>{
      return total  += product.soLuong;
    },0);
    
  }
  render() {
    const {detailProduct} = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalQuantity()})
          </button>
        </div>
        <DanhSachSanPham listProduct = {this.state.listProduct} detailProduct ={this.handleDetailProduct}
        shopProduct = {this.handleShopProduct} />
        <Modal listCart={this.state.listCart} productDelete= {this.handleDelete} productQuantity = {this.productQuantity}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td> Man Hinh </td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
