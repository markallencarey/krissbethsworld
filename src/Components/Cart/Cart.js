import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCart, clearCart } from '../../redux/cartReducer'
import CartItem from './CartItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

const CartMenu = (props) => {

  function handleGetCart() {
    axios.get('/api/cart').then(res => {
      props.updateCart(res.data)
      console.log('cart handled!')
    })
  }

  useEffect(() => {
    handleGetCart()
  })

  function clearCart() {
    axios.delete('/api/cart/clear').then(res => {
      props.clearCart()
    })
  }

  return (
    <div className='cart'>
      <div className='cart-header'>
        <Link
          to={'/products'}
          className='link'
        >
          <div className='cart-close-btn'>
            <MdKeyboardArrowLeft
              size='22' />
            <p className='cart-close-text'>Shop</p>
          </div>
        </Link>
        <button
          onClick={clearCart}
          className='cart-clear-cart-btn'
        >Clear Cart</button>
      </div>

      <div className='cart-list'>
        {props.cart.map(element => {
          return (
            <CartItem
              key={element.id}
              cartItem={element}
              handleGetCart={handleGetCart}
            />
          )
        })}
      </div>

      <div className='footer'>
        <div className='cart-total-div'>
          <p className='cart-total-text'>Total:</p>
          <p className='cart-total-price'>$TOTAL</p>
        </div>
        <Link
          className='link'
          to={'/checkout'}>
          <div className='cart-checkout-btn-div'>
            <button className='cart-checkout-btn'>Confirm Info</button>
          </div>
        </Link>
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

export default connect(mapStateToProps, { updateCart, clearCart })(withRouter(CartMenu))