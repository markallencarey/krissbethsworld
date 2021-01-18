import React from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../../redux/cartReducer'
import axios from 'axios'

const CartItem = (props) => {

  let price = (props.cartItem.quantity * props.cartItem.price).toFixed(2)

  function removeCartItem() {

    const body = { product_id: props.cartItem.product_id }

    console.log(body)

    axios.delete('/api/cart', body).then(res => {
      props.updateCart(res.data)
      console.log(props.cart)
    })
  }

  return (
    <div className='cart-item'>

      <div className='cart-item-info'>
        <img className='cart-img' src={props.cartItem.img} alt='product' />
        <div className='cart-item-name-div'>
          <p className='cart-item-name'>{props.cartItem.name}</p>
        </div>
      </div>
      <div className='cart-item-cost-info'>
        <p className='cart-item-quantity'>x{props.cartItem.quantity}</p>
        <p className='cart-item-price'>${price}</p>
      </div>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
  }
}

export default connect(mapStateToProps, { updateCart })(CartItem)