import React from 'react'

const CartMenuItem = (props) => {

  return (
  <div className='cart-menu-item'>
      <p className='cart-menu-title'>{props.cartItem.name}</p>
      <p className='cart-menu-item-quantity'>{props.cartItem.quantity}</p>
      <p className='cart-menu-item-price'>{props.cartItem.price}</p>
    </div>
  )
}

export default CartMenuItem