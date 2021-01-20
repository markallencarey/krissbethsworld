import React from 'react'
import KBLogo from '../../images/KBWorld-logo-nobg.png'
import { Link, withRouter } from 'react-router-dom'

const Home = (props) => {

  return (
    <div className='home'>
      <div className='hero-img'>
      </div>
      <div className='home-welcome-div'>
        <h2 className='welcome-to'>Welcome to</h2>
        <img
          className='KB-hero-logo'
          src={KBLogo} />
        <h1 className='title'>Krissbeth's</h1>
        <h1 className='title'>World!</h1>
        <Link
          className='link'
          to={'/products'}>
          <h2 className='home-visit-shop'>Visit my Shop</h2>
        </Link>
      </div>
    </div>
  )
}

export default withRouter(Home)