import React, { useState } from 'react'
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
      <div className='mobile-nav-items'>
        <p className='mobile-nav-item'>Home</p>
        <p className='mobile-nav-item'>Products</p>
        <p className='mobile-nav-item'>Cart</p>
        <p className='mobile-nav-item'>Login</p>
      </div>
    </div>

  )
}

export default MobileNav