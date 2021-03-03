import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/userReducer'
import { clearCart } from '../../redux/cartReducer'
import axios from 'axios'
import { Nav } from 'react-bootstrap'

const NavBar = (props) => {

  const { logoutUser, clearCart, isLoggedIn, user } = props

  function logout() {
    axios.delete('/auth/logout').then(res => {
      logoutUser()
      clearCart()
    })
  }

  return (
    <Nav className='nav-bar'>
      <Nav.Item>
        <Link
          to={'/'}
          className='link'
        >
          <h5>Home</h5>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link
          to={'/products'}
          className='link'
        >
          <h5>Shop</h5>
        </Link>
      </Nav.Item>

      {!isLoggedIn ? (
        <Nav.Item>
          <Link
            to={'/login'}
            className='link'
          >
            <h5>Log In</h5>
          </Link>
        </Nav.Item>
      ) : (
          <Nav.Item>
            <Link
              to={'/loggedout'}
              className='link'>
              <h5
                onClick={() => {
                  logout()
                }}
              >Log Out</h5>
            </Link>
          </Nav.Item>
        )}

      {isLoggedIn ? (
        <Nav.Item className='nav-bar-welcome'>
          <p>Welcome, {user.first_name}!</p>
        </Nav.Item>
      ) : (null)}
    </Nav>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user,
    ...reduxState.isLoggedIn
  }
}

export default connect(mapStateToProps, { logoutUser, clearCart })(withRouter(NavBar))