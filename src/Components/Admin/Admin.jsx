import React from 'react'
import './Admin.css'
import Cover from '../cover/cover'
import Midwife from '../Admin/Midwife/Midwife'

export default function Admin() {
    return (
        <div className='admin-container'>
            <Cover />
            <div className='navigation-container'>
                <ul>
                    <li>Midwife</li>
                    <li>Medical officers</li>
                    <li>News Feeds</li>
                    <li>Baby Details</li>
                </ul>
            </div>
            <Midwife />
        </div>
    )
}
