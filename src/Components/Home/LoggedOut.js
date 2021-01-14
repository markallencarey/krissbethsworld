import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const LoggedOut = (props) => {

  return (
    <div className='logged-out'>
      <p>You have been successfully logged out</p>
      <Link to={'/'}>
        <p>Return Home</p>
      </Link>
    </div>
  )
}

export default withRouter(LoggedOut)