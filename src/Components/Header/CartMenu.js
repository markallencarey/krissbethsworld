import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCart, clearCart, getCart } from '../../redux/cartReducer'
import CartMenuItem from './CartMenuItem'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'
import Loading from '../Home/Loading'
import { loadStripe } from '@stripe/stripe-js'
// import { ClickAwayListener } from '@material-ui/core'

const stripePromise = loadStripe('pk_test_51I9YaaDrQip7yfNSgjgRZygvDZq6uDslE0NMxXrd2mycNJBIxKbzC8amtkDwRCRDrCVJWqJ30kcmeFrkmeJ91CxB00NvHR5Fep')

const CartMenu = (props) => {

  useEffect(() => {
    props.getCart()
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

  // function handleClickAway() {
  //   props.toggleCartMenu()
  // }

  return (
    // <ClickAwayListener onClickAway={handleClickAway}>
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

      <footer>
        {/* <div className='cart-menu-total-div'>
          <p className='cart-menu-total-text'>Total:</p>
          <p className='cart-menu-total-price'>${total}</p>
        </div> */}
        <div className='cart-menu-checkout-btn-div'>
          <button
            className='cart-menu-checkout-btn'
            onClick={handleClick}
          >Checkout</button>
        </div>
      </footer>
    </div>
    // </ClickAwayListener>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.user
  }
}

export default connect(mapStateToProps, { updateCart, clearCart, getCart })(CartMenu)