import React, { Component } from 'react'
import { connect } from "react-redux"

class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc);
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                    <img style={{ transform: 'rotate(120deg)' }} 
                    className='mt-3' width={100} height={100} 
                    src={this.props.mangDatCuoc.find(item=> item.datCuoc === true).hinhAnh} 
                    alt={this.props.mangDatCuoc.find(item=> item.datCuoc === true).hinhAnh}/>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src="./gameOanXuXi/player.png" alt='./gameOanXuXi/player.png' />
                <div className='row'>
                    {this.props.mangDatCuoc.map((item, index) => {
                
                        //xét giá trị đặt cược thêm viền cho item được chọn

                        let border = {};

                        if(item.datCuoc){
                            border = {border: '3px solid orange'}
                        }

                        return <div className='col-4' key={index}>
                            <button 
                            onClick={()=>{
                                this.props.datcuoc(item.ma)
                            }}
                            style={border} 
                            className='btnItem'>
                                <img width={35} height={35} src={item.hinhAnh} alt={item.hinhAnh} />
                            </button>
                            </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanXuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        datcuoc: (maCuoc)=>{
            dispatch({
                type: "CHON_KEO_BUA_BAO",
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)