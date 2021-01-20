import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const LoggedOut = (props) => {

  return (
    <div className='logged-out'>
      <p className='logged-out-msg'>You have been successfully logged out</p>
      <Link
        className='link'
        to={'/'}>
        <p>Return Home</p>
      </Link>
    </div>
  )
}

export default withRouter(LoggedOut)