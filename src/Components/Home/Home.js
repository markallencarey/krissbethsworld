import React from 'react'
import KBLogo from '../../images/KBWorld-logo-nobg.png'
import { Link, withRouter } from 'react-router-dom'
import { Container, Image, Row, Col } from 'react-bootstrap'

const Home = (props) => {

  return (
    <Container fluid className='home'>
      <Row fluid className='home-div'>
        <Col></Col>
        <Col>
          <Container className='home-welcome-div'>
            <h3 className='welcome-to'>Welcome to</h3>
            <Image
              fluid
              className='KB-hero-logo'
              src={KBLogo} />
            <h1 className='title'>Krissbeth's</h1>
            <h1 className='title'>World!</h1>
            <Link
              className='link'
              to={'/products'}>
              <h3 className='home-visit-shop'>Visit my Shop</h3>
            </Link>
          </Container>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default withRouter(Home)