import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const StripeCanceled = (props) => {
  useEffect(() => {
    
  })

  return (
    <div className='Stripe-Canceled'>
      <p>The checkout was canceled</p>
      <Link
        to={'/products'}
        className='link'
      >
        <p>Return to Shop</p>
      </Link>
    </div>
  )
}

export default withRouter(StripeCanceled)