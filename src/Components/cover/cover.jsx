import React from 'react'
import './cover.css'
import Logo from '../../images/logo192.png'

export default function cover() {
    return (
        <div className='cover-container'>
            <div className='title'>
                <img src={Logo} alt="" />
                <p >Monitor Baby Growth & Suggest Advice</p>
            </div>
            <button style={{ marginRight: '20px' }}>Log Out</button>
        </div>
    )
}
