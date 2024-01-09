import React from 'react'
import './cover.css'
import Logo from '../../images/logo192.png'

export default function cover() {

    function logout() {
        window.location.href = "http://localhost:3000/auth";
    }
    return (
        <div className='cover-container'>
            <div className='title'>
                <img src={Logo} alt="" />
                {/* <p> I-Growth</p> */}
                <p >Monitor Baby Growth & Suggest Advice</p>
            </div>
            <button style={{ marginRight: '20px' }} onClick={logout}>Log Out</button>
        </div>
    )
}
