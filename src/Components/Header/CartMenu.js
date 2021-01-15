import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCart, clearCart } from '../../redux/cartReducer'
import CartMenuItem from './CartMenuItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'

const Cart = (props) => {

  useEffect(() => {
    axios.get('/api/cart').then(res => {
      console.log(props.cart)
    })
  })

  function clearCart() {
    axios.delete('/api/cart/clear').then(res => {
      props.clearCart()
    })
  }

  return (
    <div>

      <div className='cart-menu-header'>
        <div className='cart-menu-close-btn'
          onClick={props.toggleCartMenu}>
          <MdKeyboardArrowLeft
            size='18' />
          <p className='cart-menu-close-text'>Close</p>
        </div>
        <button
          onClick={clearCart}
          className='cart-menu-clear-cart-btn'
        >Clear Cart</button>
      </div>

      <div className='cart-menu-list'>
        {props.cart.map(element => {
          return (
            <CartMenuItem key={element.id} cartItem={element} />
          )
        })}
      </div>

      <div className='cart-checkout-btn-div'>
        <button className='cart-checkout-btn'>Checkout</button>
      </div>

    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.total
  }
}

export default connect(mapStateToProps, { updateCart, clearCart })(Cart)