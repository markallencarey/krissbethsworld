import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../../redux/cartReducer'
import { Link, withRouter } from 'react-router-dom'

const StripeSuccess = (props) => {

  useEffect(() => {
    props.clearCart()

  }, [])

  return (
    <div className='Stripe-Success'>
      <h1>Thank you!</h1>
      <p>for your order,</p>
      <p className='stripe-success-name'>{props.user.first_name}</p>
      <p className='stripe-success-email'>You'll receive an email confirmation shortly</p>
      <Link to={'/'} className='link'>
        <p className='stripe-success-home'>Return Home</p>
      </Link>
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.user
  }
}
export default connect(mapStateToProps, { clearCart })(withRouter(StripeSuccess))