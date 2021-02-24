import React from 'react'
import KBLogo from '../../images/KBWorld-logo-nobg.png'
import { Link, withRouter } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

const Home = (props) => {

  return (
    <Container className='home'>
      <Container fluid className='hero-img'>
      </Container>
      <Container className='home-welcome-div'>
        <h2 className='welcome-to'>Welcome to</h2>
        <Image
          className='KB-hero-logo'
          src={KBLogo} />
        <h1 className='title'>Krissbeth's</h1>
        <h1 className='title'>World!</h1>
        <Link
          className='link'
          to={'/products'}>
          <h2 className='home-visit-shop'>Visit my Shop</h2>
        </Link>
      </Container>
    </Container>
  )
}

export default withRouter(Home)