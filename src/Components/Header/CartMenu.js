import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCart, clearCart, getCart } from '../../redux/cartReducer'
import CartMenuItem from './CartMenuItem'
// import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import Loading from '../Home/Loading'
import { loadStripe } from '@stripe/stripe-js'
import { Container, Button, Modal } from 'react-bootstrap'

const stripePromise = loadStripe('pk_test_51I9YaaDrQip7yfNSgjgRZygvDZq6uDslE0NMxXrd2mycNJBIxKbzC8amtkDwRCRDrCVJWqJ30kcmeFrkmeJ91CxB00NvHR5Fep')

const CartMenu = (props) => {

  const { isLoggedIn, cartIsLoading, cart, getCart } = props

  useEffect(() => {
    getCart()
  }, [isLoggedIn]) // eslint-disable-line react-hooks/exhaustive-deps

  let total = cart.reduce((acc, el) => {
    return acc + (el.price * el.quantity)
  }, 0).toFixed(2)

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
    <Container className='CartMenu'>
      <Modal.Header className='cart-menu-header' closeButton>
        <Button
          onClick={props.clearCart}
          className='cart-menu-clear-cart-btn button'
          variant='light'
        ><h6>Clear</h6></Button>
      </Modal.Header>

      <Modal.Body className='cart-menu-list'>
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
      </Modal.Body>

      <Modal.Footer className='cart-menu-footer'>
        <div className='cart-menu-total-div'>
          <h5 className='cart-menu-total-text'>Sub-Total:</h5>
          <h5 className='cart-menu-total-price'>${total}</h5>
        </div>
        <Container className='cart-menu-checkout-btn-div'>
          <Button
            className='cart-menu-checkout-btn button'
            onClick={handleClick}
            variant='light'
          ><h5>Checkout</h5></Button>
        </Container>
      </Modal.Footer>
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