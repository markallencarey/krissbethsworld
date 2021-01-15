import React from 'react'

const CartMenuItem = (props) => {

  return (
    <div className='cart-menu-item'>
      <img className='cart-menu-img' src={props.cartItem.img} alt='product' />
      <p className='cart-menu-item-name'>{props.cartItem.name}</p>
      <p className='cart-menu-item-quantity'>{props.cartItem.quantity}</p>
      <p className='cart-menu-item-price'>{props.cartItem.price}</p>
    </div>
  )
}

export default CartMenuItem