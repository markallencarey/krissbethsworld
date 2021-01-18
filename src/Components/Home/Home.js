import React from 'react'
import KBLogo from '../../images/KBWorld-logo-nobg.png'

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
      </div>
    </div>
  )
}

export default Home