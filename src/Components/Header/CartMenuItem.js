import React from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../../redux/cartReducer'
import axios from 'axios'

const CartMenuItem = (props) => {

  let price = (props.cartItem.quantity * props.cartItem.price).toFixed(2)

  function removeCartMenuItem() {

    const body = { product_id: props.cartItem.product_id }

    console.log(body)

    axios.delete('/api/cart', body).then(res => {
      props.updateCart(res.data)
      console.log(props.cart)
      // props.handleGetCart()
    })
  }

  return (
    <div className='cart-menu-item'>
      <button
        className='cart-menu-remove'
        onClick={removeCartMenuItem}
      >
        -</button>
      <img className='cart-menu-img' src={props.cartItem.img} alt='product' />
      <div className='cart-menu-item-name-div'>
        <p className='cart-menu-item-name'>{props.cartItem.name}</p>
      </div>
      <p className='cart-menu-item-quantity'>x{props.cartItem.quantity}</p>
      <p className='cart-menu-item-price'>${price}</p>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
  }
}

export default connect(mapStateToProps, { updateCart })(CartMenuItem)