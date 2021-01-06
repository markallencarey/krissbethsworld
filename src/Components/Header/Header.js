import React, { useState } from 'react'
import '../../css/header-css/header.css'
import MobileNav from './MobileNav'
import CartMenu from './CartMenu'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineShopping } from 'react-icons/ai'

const Header = (props) => {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false)

  function toggleNavMenu() {
    setIsNavMenuOpen(!isNavMenuOpen)
  }

  function toggleCartMenu() {
    setIsCartMenuOpen(!isCartMenuOpen)
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
          />
        </nav>

        <img className='logo' src='https://uilogos.co/img/logotype/ideaa.png' />
        
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

export default Header