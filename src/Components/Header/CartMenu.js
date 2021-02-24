import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCart, clearCart, getCart } from '../../redux/cartReducer'
import CartMenuItem from './CartMenuItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import Loading from '../Home/Loading'
import { loadStripe } from '@stripe/stripe-js'
import { Container, Button } from 'react-bootstrap'

const stripePromise = loadStripe('pk_test_51I9YaaDrQip7yfNSgjgRZygvDZq6uDslE0NMxXrd2mycNJBIxKbzC8amtkDwRCRDrCVJWqJ30kcmeFrkmeJ91CxB00NvHR5Fep')

const CartMenu = (props) => {

  const { isLoggedIn, toggleCartMenu, cartIsLoading, cart, getCart } = props

  useEffect(() => {
    getCart()
  }, [isLoggedIn]) // eslint-disable-line react-hooks/exhaustive-deps


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
    <Container>
      <Container className='cart-menu-header'>
        <Container className='cart-menu-close-btn'
          onClick={toggleCartMenu}>
          <MdKeyboardArrowLeft
            size='18' />
          <p className='cart-menu-close-text'>Close</p>
        </Container>
        <Button
          onClick={props.clearCart}
          className='cart-menu-clear-cart-btn'
        >Clear</Button>
      </Container>

      <Container className='cart-menu-list'>
        {cartIsLoading ? (
          <Loading />
        ) : (
            cart.map(element => {
              return (
                <CartMenuItem
                  key={element.id}
                  cartItem={element}
                />
              )
            })
          )}
      </Container>

      <Container className='cart-menu-footer'>
        {/* <div className='cart-menu-total-div'>
          <p className='cart-menu-total-text'>Total:</p>
          <p className='cart-menu-total-price'>${total}</p>
        </div> */}
        {/* <Container className='cart-menu-checkout-btn-div'> */}
        <Button
          className='cart-menu-checkout-btn'
          onClick={handleClick}
        >Checkout</Button>
        {/* </Container> */}
      </Container>
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.user
  }
}

export default connect(mapStateToProps, { updateCart, clearCart, getCart })(CartMenu)