import React, { useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { loginUser } from '../../redux/userReducer'
import { connect } from 'react-redux'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const MobileNav = (props) => {

  return (
    <div>
      <div className='nav-back-btn'
      onClick={props.toggleNavMenu}>
        <MdKeyboardArrowLeft
        size='20'/>
        <p className='mobile-back-text'>Back</p>
      </div>

      <p>Welcome, {props.firstName}</p>

      <div className='mobile-nav-items'>
        <Link to={'/'}>
          <p className='mobile-nav-item'
          onClick={props.toggleNavMenu}>Home</p>
        </Link>
        <Link to={'/products'}>
          <p className='mobile-nav-item'
          onClick={props.toggleNavMenu}>Shop</p>
        </Link>
        <Link to={'/login'}>
          <p className='mobile-nav-item'
          onClick={props.toggleNavMenu}>Login</p>
        </Link>
        <p
          onClick={props.logout, props.toggleNavMenu}
        >Sign Out</p>
      </div>
    </div>

  )
}

const mapStateToProps = (reduxState) => reduxState.firstName
export default connect(mapStateToProps, { loginUser }) (withRouter(MobileNav))