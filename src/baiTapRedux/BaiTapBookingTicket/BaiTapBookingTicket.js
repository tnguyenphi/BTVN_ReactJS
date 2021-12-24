import React, { Component, Fragment } from 'react'
import './BaiTapBookingTicket.css'
import danhSachGheData from "../../data/danhSachGhe.json"
import ThongTinDatGhe from './ThongTinDatGhe'
import HangGhe from './HangGhe'

export default class BaiTapBookingTicket extends Component {

    renderHangGhe = () =>{
        return danhSachGheData.map((hangGhe,index)=>{
            return <Fragment key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </Fragment>
        })
    }

    render() {
        return (
            <div className='bookingMovie' 
            style={{
                position: "fixed", width: '100%', height: '100%',
                backgroundImage: 'url(./img/bookingTicket/bgmovie.jpg)', backgroundSize: '100%'
            }}>
                <div style={{ position: "fixed", width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-8 text-center'>
                                <h2 className='text-warning display-6'> ĐẶT VÉ XEM PHIM CYBERLEARN.VN </h2>
                                <div className='mt-5 text-light' style={{fontSize:'25px'}}>Man Hinh</div>
                                <div className='mt-2 ml-5' style={{display:'flex',flexDirection:'column', justifyContent:'center'}}>
                                    <div className='screen'></div>
                                    {this.renderHangGhe()}
                                </div>
                                
                            </div>
                            <div className='col-4'>
                            <h2 style={{fontSize:'25px'}} className='text-light display-6 mt-2'> DANH SÁCH GHẾ BẠN CHỌN </h2>
                            <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
