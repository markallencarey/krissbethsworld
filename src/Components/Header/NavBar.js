import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/userReducer'
import { clearCart } from '../../redux/cartReducer'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import axios from 'axios'

const NavBar = (props) => {

  function logout() {
    axios.delete('/auth/logout').then(res => {
      props.logoutUser()
      props.clearCart()
    })
  }

  return (
    <div className='nav-bar'>

      <div className='nav-bar-items'>
        <Link
          to={'/'}
          className='link'
        >
          <p>Home</p>
        </Link>
        <Link
          to={'/products'}
          className='link'
        >
          <p>Shop</p>
        </Link>

        {!props.isLoggedIn ? (
          <Link
            to={'/login'}
            className='link'
          >
            <p>Log In</p>
          </Link>
        ) : (
            <Link
              to={'/loggedout'}
              className='link'>
              <p
                className='nav-bar-item'
                onClick={() => {
                  logout()
                }}
              >Log Out</p>
            </Link>
          )}
</div>

        {props.isLoggedIn ? (
          <div className='nav-bar-welcome'>
            <p>Welcome, {props.user.first_name}!</p>
          </div>
        ) : (null)}


    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user,
    ...reduxState.isLoggedIn
  }
}

export default connect(mapStateToProps, { logoutUser, clearCart })(withRouter(NavBar))