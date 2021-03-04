import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../../redux/cartReducer'
import { Link, withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import axios from 'axios'

const StripeSuccess = (props) => {

  const { clearCart, user } = props

  useEffect(() => {
    clearCart()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    axios.get('/auth/user').then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <Container className='Stripe-Success'>
      <h1>Thank you!</h1>
      {/* <p>for your order.</p> */}
      {/* <p className='stripe-success-name'>{user.first_name}</p> */}
      <p className='stripe-success-email'>You'll receive an email confirmation shortly.</p>
      <Link to={'/'} className='link'>
        <p className='stripe-success-home'>Return Home</p>
      </Link>
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.user
  }
}
export default connect(mapStateToProps, { clearCart })(withRouter(StripeSuccess))