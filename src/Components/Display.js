import React from 'react'
import routes from '../routes.js'
import Header from './Header/Header.js'


const Display = (props) => {

  return (
    <div className='Display'>
        <Header />
        {routes}
    </div >
  )
}

export default Display