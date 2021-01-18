import React, { useEffect } from 'react'
import axios from 'axios'
import routes from '../routes.js'
import Header from './Header/Header.js'


const Display = (props) => {

  useEffect(() => {
    axios.get('/auth/user').then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <div className='Display'>
      <Header />
      {routes}
    </div >
  )
}

export default Display