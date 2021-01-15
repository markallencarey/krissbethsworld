import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/userReducer'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const MobileNav = (props) => {

  function logout() {
    axios.delete('/auth/logout').then(res => {
      props.logoutUser()
    })
  }

  return (
    <div>
      <div className='nav-back-btn'
        onClick={props.toggleNavMenu}>
        <MdKeyboardArrowLeft
          size='18' />
        <p className='mobile-back-text'>Back</p>
      </div>

      {props.isLoggedIn ? (
        <div className='mobile-nav-welcome'>
          <p>Welcome,</p>
          <p>{props.user.first_name}!</p>
        </div>
      ) : (null)}

      <div className='mobile-nav-items'>
        <Link
          className='link'
          to={'/'}>
          <p className='mobile-nav-item'
            onClick={props.toggleNavMenu}>Home</p>
        </Link>
        <Link
          className='link'
          to={'/products'}>
          <p className='mobile-nav-item'
            onClick={props.toggleNavMenu}>Shop</p>
        </Link>

        {!props.isLoggedIn ? (
          <Link
            className='link'
            to={'/login'}>
            <p className='mobile-nav-item'
              onClick={props.toggleNavMenu}>Log In</p>
          </Link>
        ) : (
            <Link
              className='link'
              to={'/loggedout'}>
              <p
                className='mobile-nav-item'
                onClick={() => {
                  logout()
                  props.toggleNavMenu()
                }}
              >Log Out</p>
            </Link>
          )}

      </div>
    </div>

  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user,
    ...reduxState.isLoggedIn
  }
}

export default connect(mapStateToProps, { logoutUser })(withRouter(MobileNav))