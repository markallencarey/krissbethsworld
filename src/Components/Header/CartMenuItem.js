import React from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../../redux/cartReducer'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { Container, Button, Image, Row, Col } from 'react-bootstrap'

const CartMenuItem = (props) => {

  const { cartItem, updateCart } = props

  let cartPrice = (cartItem.price * cartItem.quantity).toFixed(2)

  function removeCartMenuItem() {
    axios.delete(`/api/cart?product_id=${cartItem.product_id}`).then(res => {
      updateCart(res.data)
    })
  }

  function decreaseQuantity() {
    const body = { product_id: cartItem.product_id, quantity: (cartItem.quantity - 1) }

    axios.put('/api/cart', body).then(
      res => {
        updateCart(res.data)
      }
    )
  }

  function increaseQuantity() {
    const body = { product_id: cartItem.product_id, quantity: (cartItem.quantity + 1) }

    axios.put('/api/cart', body).then(
      res => {
        updateCart(res.data)
      }
    )
  }

  return (
    <Container className='cart-menu-item'>
      <Row>
        <Col
          sm={12}
          md={2}
          className='cart-col'
        >
          <Image
            fluid
            className='cart-img'
            src={cartItem.img} alt='product'
          />
        </Col>
        <Col
          sm={12}
          md={4}
          className='cart-col'
        >
          <p>{cartItem.name}</p>
        </Col>
        <Col
          sm={12}
          md={6}
          className='cart-col cart-col-qty'
        >
          <Container className='cart-qty'>
            <Button
              className='button'
              onClick={decreaseQuantity}
            ><h5>-</h5></Button>
            <h5>x{cartItem.quantity}</h5>
            <Button
              className='button'
              onClick={increaseQuantity}
            ><h5>+</h5></Button>
          </Container>
          <Container className='cart-qty'>
            <h5 className='cart-item-price'>${cartPrice}</h5>
          </Container>
          <Container className='cart-qty'>
            <Button
              className='button remove-btn'
              onClick={removeCartMenuItem}
            >
              <p>Remove</p>
            </Button>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
  }
}

export default connect(mapStateToProps, { updateCart })(withRouter(CartMenuItem))