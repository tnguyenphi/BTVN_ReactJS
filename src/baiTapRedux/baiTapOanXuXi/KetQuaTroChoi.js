import React, { Component } from 'react'

export default class KetQuaTroChoi extends Component {
    render() {
        return (
            <div>
                <div className='display-4 text-warning'> Bạn Thua !!</div>
                <div className='display-4 text-success'> Số Bàn thắng: <span className='text-warning' >0</span></div>
                <div className='display-4 text-success'> Số Bàn Choi: <span className='text-warning' >0</span></div>
            </div>
        )
    }
}
