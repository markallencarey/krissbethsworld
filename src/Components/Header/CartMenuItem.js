import React, { useState } from 'react'

const CartMenuItem = (props) => {

  let price = (props.cartItem.quantity * props.cartItem.price).toFixed(2)

  return (
    <div className='cart-menu-item'>
      <img className='cart-menu-img' src={props.cartItem.img} alt='product' />
      <div className='cart-menu-item-name-div'>
        <p className='cart-menu-item-name'>{props.cartItem.name}</p>
      </div>
      <p className='cart-menu-item-quantity'>x{props.cartItem.quantity}</p>
      <p className='cart-menu-item-price'>${price}</p>
    </div>
  )
}

export default CartMenuItem