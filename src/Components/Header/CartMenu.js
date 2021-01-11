import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CartMenuItem from '../Header/CartMenuItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Cart = (props) => {

  // const [cartItems, setCartItems] = useState([])

  // useEffect(() => {
  //   axios.get('/api/cart').then(res => {
  //     console.log(res.data)
  //     setCartItems(res.data)
  //   }).catch(err => console.log(err))
  // }, [])

  return (
    <div>

      <div className='cart-back-btn'
        onClick={props.toggleCartMenu}>
        <MdKeyboardArrowLeft
          size='20' />
        <p className='cart-back-text'>Back</p>
      </div>

      <div className='cart-menu-list'>
        
      </div>

      <div className='cart-checkout-btn-div'>
        <button className='cart-checkout-btn'>Checkout</button>
      </div>

    </div>
  )
}

export default Cart