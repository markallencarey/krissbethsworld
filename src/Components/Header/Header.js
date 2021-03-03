import React, { useState } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import CartMenu from './CartMenu'
import { HiMenu } from 'react-icons/hi'
import { AiOutlineShopping } from 'react-icons/ai'
import KBLogo from '../../images/KBWorld-logo-nobg.png'
import { Container, Image, Row, Col, Modal } from 'react-bootstrap'

const Header = (props) => {

  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false)

  const [showCartMenu, setShowCartMenu] = useState(false)

  const handleCloseCartMenu = () => setShowCartMenu(false)
  const handleShowCartMenu = () => setShowCartMenu(true)

  function toggleNavMenu() {
    setIsNavMenuOpen(!isNavMenuOpen)
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
          {!isNavMenuOpen ? (
            <HiMenu
              onClick={toggleNavMenu}
              className='hamburger'
              size='5vh'
            />
          ) : (null)}
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
            onClick={handleShowCartMenu}
            className='cart-icon'
            size='5vh'
          />
          <Modal
            show={showCartMenu}
            onHide={handleCloseCartMenu}
            className='cart-menu'
          >
            <CartMenu />
          </Modal>
        </Col>
      </Row>
    </Container>
  )
}

export default withRouter(Header)