import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../../redux/cartReducer'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'

const CartMenuItem = (props) => {

  let price = (props.cartItem.quantity * props.cartItem.price).toFixed(2)

  function removeCartMenuItem() {
    axios.delete(`/api/cart?product_id=${props.cartItem.product_id}`).then(res => {
      props.updateCart(res.data)
    })
  }

  function decreaseQuantity() {
    const body = { product_id: props.cartItem.product_id, quantity: (props.cartItem.quantity - 1) }

    axios.put('/api/cart', body).then(
      res => {
        props.updateCart(res.data)
      }
    )
  }

  function increaseQuantity() {
    const body = { product_id: props.cartItem.product_id, quantity: (props.cartItem.quantity + 1) }

    axios.put('/api/cart', body).then(
      res => {
        props.updateCart(res.data)
      }
    )
  }

  return (
    <div className='cart-menu-item'>
      <button
        className='cart-menu-remove'
        onClick={removeCartMenuItem}
      >
        -</button>

      {/* <Link
        className='link'
        to={`/products/${props.cartItem.product_id}`}
      > */}
        <div className='cart-menu-link-div'>
          <img className='cart-menu-img' src={props.cartItem.img} alt='product' />
          <div className='cart-menu-item-name-div'>
            <p className='cart-menu-item-name'>{props.cartItem.name}</p>
          </div>
        </div>
      {/* </Link> */}

      <div className='cart-menu-qty-div'>
        <button
          onClick={decreaseQuantity}
          className='cart-menu-decrease'
        >-</button>
        <p className='cart-menu-item-quantity'>x{props.cartItem.quantity}</p>
        <button
          onClick={increaseQuantity}
          className='cart-menu-increase'
        >+</button>
      </div>
      <p className='cart-menu-item-price'>${price}</p>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
  }
}

export default connect(mapStateToProps, { updateCart })(withRouter(CartMenuItem))