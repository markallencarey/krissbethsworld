import React, { useState } from 'react'
import CartMenuItem from '../Header/CartMenuItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Cart = (props) => {

  return (
    <div>

      <div className='cart-back-btn'
        onClick={props.toggleCartMenu}>
        <MdKeyboardArrowLeft
          size='20' />
        <p className='cart-back-text'>Back</p>
      </div>

      <div className='cart-menu-list'>
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />
        <CartMenuItem />


      </div>

      <div className='cart-checkout-btn-div'>
        <button className='cart-checkout-btn'>Checkout</button>
      </div>

    </div>
  )
}

export default Cart