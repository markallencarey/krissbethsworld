import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearCart } from '../../redux/cartReducer'

const StripeSuccess = (props) => {

  useEffect(() => {
    props.clearCart()
    
  }, [])

  return (
    <div className='Stripe-Success'>
      StripeSuccess.js
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.cart,
    ...reduxState.user
  }
}
export default connect(mapStateToProps, { clearCart })(StripeSuccess)