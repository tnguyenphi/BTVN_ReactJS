import React, { Component } from 'react'

export default class Computer extends Component {
    render() {
        return (
            <div className='text-center playerGame'>
                <div className='theThink'>
                    <img  style={{transform:'rotate(120deg)'}} className='mt-3' width={100} height={100} src='./gameOanXuXi/bua.png' alt='./gameOanXuXi/bua.png' />
                </div>
                <div className='speech-bubble'></div>
                <img style={{ width: 150, height: 150 }} src="./gameOanXuXi/playerComputer.png" alt='./gameOanXuXi/playerComputer.png' />
            </div>
        )
    }
}
