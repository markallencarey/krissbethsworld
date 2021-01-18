import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const StripeCanceled = (props) => {

  return (
    <div className='Stripe-Canceled'>
      <p>The checkout was cancelled</p>
      <Link to={'/products'}>
        <p className='link'>Return to Shop</p>
      </Link>
    </div>
  )
}

export default withRouter(StripeCanceled)