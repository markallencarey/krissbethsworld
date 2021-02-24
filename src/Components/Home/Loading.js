import React from 'react'
import { Roller } from 'react-awesome-spinners'
import { Container } from 'react-bootstrap'


const Loading = (props) => {

  return (
    <Container className='Loading'>
      <Container className='loading-roller'>
        <Roller />
      </Container>
    </Container>
  )
}

export default Loading