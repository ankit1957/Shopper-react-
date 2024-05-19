import React from 'react'
import exclusive_image from "../Assets/exclusive_image.png"
import "./Offers.css"

export const Offers = () => {
  return (
    <div className='offers '>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p className='uppercase'>ONLY ont best sellers products</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
