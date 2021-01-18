import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { updateCart, clearCart, getCart } from '../../redux/cartReducer'
import CartMenuItem from './CartMenuItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import Loading from '../Home/Loading'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51I9YaaDrQip7yfNSgjgRZygvDZq6uDslE0NMxXrd2mycNJBIxKbzC8amtkDwRCRDrCVJWqJ30kcmeFrkmeJ91CxB00NvHR5Fep')

const CartMenu = (props) => {

  const [message, setMessage] = useState('')

  useEffect(() => {
    props.getCart()

    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      setMessage("Order canceled - continue to shop around and checkout when you're ready")
    }
  }, [props.isLoggedIn])

  async function handleClick() {
    const stripe = await stripePromise

    axios.post('/create-checkout-session').then(res => {
      const session = res.data
      stripe.redirectToCheckout({
        sessionId: session.id,
      })
    }).catch(err => {
      alert(err)
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
          onClick={props.clearCart}
          className='cart-menu-clear-cart-btn'
        >Clear Cart</button>
      </div>

      <div className='cart-menu-list'>
        {props.cartIsLoading ? (
          <Loading />
        ) : (
            props.cart.map(element => {
              return (
                <CartMenuItem
                  key={element.id}
                  cartItem={element}
                />
              )
            })
          )}
      </div>

      <div className='cart-menu-checkout-btn-div'>
        <button
          className='cart-menu-checkout-btn'
          onClick={handleClick}
        >Checkout</button>
      </div>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.user
  }
}

export default connect(mapStateToProps, { updateCart, clearCart, getCart })(CartMenu)