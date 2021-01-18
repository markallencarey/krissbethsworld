import React, { useState } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import MobileNav from './MobileNav'
import CartMenu from './CartMenu'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineShopping } from 'react-icons/ai'
import KBLogo from '../../images/KBWorld-logo-nobg.png'

const Header = (props) => {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)

  function toggleNavMenu() {
    setIsNavMenuOpen(!isNavMenuOpen)
  }

  function toggleCartMenu() {
    setIsCartMenuOpen(!isCartMenuOpen)
  }

  function logout() {
    axios.delete('/auth/logout').then(() => {

    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <div>
      <header className='header'>
        <HiMenu
          onClick={toggleNavMenu}
          className='hamburger'
          size='40'
        />
        <nav className={`mobile-nav ${isNavMenuOpen ? null : 'mobile-nav-hide'}`}>
          <MobileNav
            toggleNavMenu={toggleNavMenu}
            logout={logout}
          />
        </nav>

        <Link to={'/'}>
          <img className='logo' src={KBLogo} alt='logo'/>
        </Link>
        
        <AiOutlineShopping
          onClick={toggleCartMenu}
          className='cart-icon'
          size='40'
        />
        <div className={`cart-menu ${isCartMenuOpen ? null : 'cart-menu-hide'}`}>
          <CartMenu
            toggleCartMenu={toggleCartMenu}
          />
        </div>
      </header>
    </div>
  )
}

export default withRouter(Header)