import React, { useEffect } from 'react'
import axios from 'axios'
import routes from '../routes.js'
import Header from './Header/Header.js'
import { Container } from 'react-bootstrap'

const Display = (props) => {

  useEffect(() => {
    axios.get('/auth/user').then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <Container fluid className='Display'>
      <Header />
      {routes}
    </Container >
  )
}

export default Display