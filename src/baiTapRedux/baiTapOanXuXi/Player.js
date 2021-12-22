import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                    <img  style={{transform:'rotate(120deg)'}} className='mt-3' width={100} height={100} src='./gameOanXuXi/bua.png' alt='./gameOanXuXi/bua.png'/>
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src="./gameOanXuXi/player.png" alt='./gameOanXuXi/player.png' />
                <div className='row'>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={35} height={35}  src='./gameOanXuXi/bao.png' alt='./gameOanXuXi/bao.png' />
                        </button>
                        
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={35} height={35} src='./gameOanXuXi/bua.png' alt='./gameOanXuXi/bua.png' />
                        </button>
                        
                    </div>
                    <div className='col-4'>
                        <button className='btnItem'>
                            <img width={35} height={35} src='./gameOanXuXi/keo.png' alt='./gameOanXuXi/keo.png' />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
