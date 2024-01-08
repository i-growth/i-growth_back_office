import React from 'react'
import Navbar from '../Navbar/Navbar'
import './News_feed.scss';
import Cart from './news_cart'

export default function News_feed() {
  return (
    <div className='background'>
        <div>
            <Navbar/>
        </div>
        <div className='news_body'>
            <div className='news_box'>
                <Cart/>
                <Cart/>
            </div>
        </div>
    </div>
  )
}
