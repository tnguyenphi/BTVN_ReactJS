import React, { Component } from 'react'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import "./BaiTapOanXuXi.css"

export default class BaiTapOanXuXi extends Component {
    render() {
        return (
            <div className="gameOanXuXi">
                <div className="row text-center mt-5">
                    <div className='col-4'>
                        <Player/>
                    </div>
                    <div className='col-4'>
                        <KetQuaTroChoi/>
                        <button className='btn btn-success p-2 display-4 mt-5'>Play Game</button>
                    </div>
                    <div className='col-4'>
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}
