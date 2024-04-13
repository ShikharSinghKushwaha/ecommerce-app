import React from 'react'
import './Banner.css'
import { NavLink } from 'react-router-dom'

function Banner({ firstBanner }) {
  return (
    <div>
       {firstBanner ? 
       <div>
       <div className='banner-container'>

         <div className='text-container'>
          <h1>Creating A Living Standard</h1>
          <h3 className='banner-text'>RAOUF Products are all made to standard sizes so that you can mix and match them freely.</h3>
          <NavLink to='/products' >
            <button className="btn">Shop Now</button>
          </NavLink>
          </div>
          <div className='banner-image'>
            <img src='https://source.unsplash.com/500x500?wardrobe'  />
          </div>
          </div>
          </div>
          : 
          <div>
       <div className='banner-container'>

          <div className='banner-image'>
            <img src='https://source.unsplash.com/500x500?clothing_shop'  />
          </div>

          <div className='text-container'>
          <h1>Everything is crafted with Love and Care</h1>
          <h3 className='banner-text'>Onlinestore Products are all made to standard sizes so that you can mix and match them freely.</h3>
          <NavLink to='/products' >
            <button className="btn">Shop Now</button>
          </NavLink>
          </div>
          </div>
       </div>

          }
    </div>
  )
}

export default Banner
