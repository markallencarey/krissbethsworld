import React, { useState } from 'react'
import '../css/display.css'
import routes from '../routes.js'
import Header from './Header/Header.js'

const Display = (props) => {

  return (
    <div className='Display'>
      <div className='hero-img'>
        <Header />
        {routes}
      </div>
    </div >
  )
}

export default Display