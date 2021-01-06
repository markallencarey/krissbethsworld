import React, { useState } from 'react'
import '../../css/header-css/cartMenu.css'
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
      <ol className='cart-menu-list'>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
        <li className='cart-menu-item'>Sticker</li>
      </ol>
      <div className='cart-checkout-btn-div'>
        <button className='cart-checkout-btn'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart