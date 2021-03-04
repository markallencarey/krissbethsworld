import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const StripeCanceled = (props) => {
  useEffect(() => {
    
  })

  return (
    <Container className='Stripe-Canceled'>
      <p>The checkout was canceled</p>
      <Link
        to={'/products'}
        className='link'
      >
        <p>Return to Shop</p>
      </Link>
    </Container>
  )
}

export default withRouter(StripeCanceled)