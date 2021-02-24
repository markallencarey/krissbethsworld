import React from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../../redux/cartReducer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Container, Button, Image } from 'react-bootstrap'

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
    <Container className='cart-menu-item'>
      <Button
        className='cart-menu-remove'
        onClick={removeCartMenuItem}
      >
        -</Button>

      {/* <Link
        className='link'
        to={`/products/${props.cartItem.product_id}`}
      > */}
        <Container className='cart-menu-link-div'>
          <Image className='cart-menu-img' src={props.cartItem.img} alt='product' />
          <Container className='cart-menu-item-name-div'>
            <p className='cart-menu-item-name'>{props.cartItem.name}</p>
          </Container>
        </Container>
      {/* </Link> */}

      <Container className='cart-menu-qty-div'>
        <Button
          onClick={decreaseQuantity}
          className='cart-menu-decrease'
        >-</Button>
        <p className='cart-menu-item-quantity'>x{props.cartItem.quantity}</p>
        <Button
          onClick={increaseQuantity}
          className='cart-menu-increase'
        >+</Button>
      </Container>
      <p className='cart-menu-item-price'>${price}</p>
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
  }
}

export default connect(mapStateToProps, { updateCart })(withRouter(CartMenuItem))