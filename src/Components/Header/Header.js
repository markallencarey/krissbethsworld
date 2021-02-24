import React, { useState } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import CartMenu from './CartMenu'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineShopping } from 'react-icons/ai'
import KBLogo from '../../images/KBWorld-logo-nobg.png'
import { Container, Image, Row, Col } from 'react-bootstrap'

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
    <Container fluid className='header'>
      <Row>
        <Col className='header-Col1'>
          <HiMenu
            onClick={toggleNavMenu}
            className='hamburger'
            size='5vh'
          />
          <Container className={`mobile-nav ${isNavMenuOpen ? null : 'mobile-nav-hide'}`}>
            <MobileNav
              toggleNavMenu={toggleNavMenu}
              logout={logout}
            />
          </Container>
          <NavBar />
        </Col>
        <Col className='header-Col2'>
          <Link to={'/'}>
            <Image fluid className='logo' src={KBLogo} alt='logo' />
          </Link>
        </Col>
        <Col className='header-Col3'>
          <AiOutlineShopping
            onClick={toggleCartMenu}
            className='cart-icon'
            size='5vh'
          />
          <Container className={`cart-menu ${isCartMenuOpen ? null : 'cart-menu-hide'}`}>
            <CartMenu
              toggleCartMenu={toggleCartMenu}
            />
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Header)