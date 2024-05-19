import React from 'react'
import "./Items.css"
import { Link } from 'react-router-dom'

export const Item = (props) => {
  return (
    <div className='item w-full'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} className='h-[60vh] w-[35vw]' src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item