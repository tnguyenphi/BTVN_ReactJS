import React, { Component } from 'react'
import Player from './Player'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import "./BaiTapOanXuXi.css"
import { connect } from 'react-redux'

class BaiTapOanXuXi extends Component {
    render() {

        return (
            <div className="gameOanXuXi" >
                <div className="row text-center mt-5">
                    <div className='col-4'>
                        <Player />
                    </div>
                    <div className='col-4'>
                        <KetQuaTroChoi />
                        <button onClick={() => {
                            this.props.playGame()
                        }} className='btn btn-success p-2 display-4 mt-5'>Play Game</button>
                    </div>
                    <div className='col-4'>
                        <Computer />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            let count = 0;
            //khai bao ham lap di lap lai 
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RAN_DOM'
                })
                count++;
                if (count >= 10) {
                    //dung ham setInterval
                    clearInterval(randomComputerItem)

                    dispatch({
                        type: 'END_GAME'
                    })
                }
            }, 100)

        }
    }
}
export default connect(null, mapDispatchToProps)(BaiTapOanXuXi)