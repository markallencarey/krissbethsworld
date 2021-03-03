import React from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/userReducer'
import { clearCart } from '../../redux/cartReducer'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Nav } from 'react-bootstrap'

const MobileNav = (props) => {

  const { user, toggleNavMenu } = props

  function logout() {
    axios.delete('/auth/logout').then(res => {
      props.logoutUser()
      props.clearCart()
    })
  }

  return (
    <Nav>
      <Nav.Item className='nav-close-btn'
        onClick={toggleNavMenu}>
        <MdKeyboardArrowLeft
          size='18' />
        <p className='mobile-close-text'>Close</p>
      </Nav.Item>

      {props.isLoggedIn ? (
        <Nav.Item className='mobile-nav-welcome'>
          <p>Welcome,</p>
          <p>{user.first_name}!</p>
        </Nav.Item>
      ) : (null)}

      <Nav.Item className='mobile-nav-items'>
        <Link
          className='link'
          to={'/'}>
          <p className='mobile-nav-item'
            onClick={toggleNavMenu}>Home</p>
        </Link>
        <Link
          className='link'
          to={'/products'}>
          <p className='mobile-nav-item'
            onClick={toggleNavMenu}>Shop</p>
        </Link>

        {!props.isLoggedIn ? (
          <Link
            className='link'
            to={'/login'}>
            <p className='mobile-nav-item'
              onClick={toggleNavMenu}>Log In</p>
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
      </Nav.Item>
    </Nav>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user,
    ...reduxState.isLoggedIn
  }
}

export default connect(mapStateToProps, { logoutUser, clearCart })(withRouter(MobileNav))