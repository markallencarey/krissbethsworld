import axios from 'axios'
import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { registerUser } from '../../redux/userReducer'
import { connect } from 'react-redux'
import { Container, Form, Button } from 'react-bootstrap'

const Register = (props) => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])
  const [phoneNo, setPhoneNo] = useState([])

  function handleEmailInput(value) {
    setEmail(value)
  }

  function handlePasswordInput(value) {
    setPassword(value)
  }

  function handleFirstNameInput(value) {
    setFirstName(value)
  }

  function handleLastNameInput(value) {
    setLastName(value)
  }

  function handlePhoneNoInput(value) {
    setPhoneNo(value)
  }

  function register() {
    axios.post('/auth/register', { email, password, firstName, lastName, phoneNo }).then(res => {
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setPhoneNo('')
      props.registerUser(res.data)
    }).catch(err => {
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setPhoneNo('')
      console.log(err)
    })
  }

  return (
    <Container className='Register'>
      {!props.isRegistered ? (
        <Form className='register-form'>
          <Form.Group className='register-form-email'>
            <Form.Label>Email: </Form.Label>
              <Form.Control
                type='email'
                placeholder='email'
                value={email}
                onChange={e => handleEmailInput(e.target.value)}
              />
          </Form.Group>

          <Form.Group className='register-form-password'>
            <Form.Label>Password: </Form.Label>
              <Form.Control
                type='password'
                placeholder='password'
                value={password}
                onChange={e => handlePasswordInput(e.target.value)}
              />
          </Form.Group>

          <Form.Group className='register-form-first-name'>
            <Form.Label>First Name: </Form.Label>
              <Form.Control
                type='text'
                placeholder='first name'
                value={firstName}
                onChange={e => handleFirstNameInput(e.target.value)}
              />
          </Form.Group>

          <Form.Group className='register-form-last-name'>
            <Form.Label>Last Name: </Form.Label>
              <Form.Control
                type='text'
                placeholder='last name'
                value={lastName}
                onChange={e => handleLastNameInput(e.target.value)}
              />
          </Form.Group>

          <Form.Group className='register-form-phone-no'>
            <Form.Label>Phone Number: </Form.Label>
              <Form.Control
                type='text'
                placeholder='(000) 000-0000'
                value={phoneNo}
                onChange={e => handlePhoneNoInput(e.target.value)}
              />
          </Form.Group>

          <Button
            className='register-form-register-btn'
            onClick={register}>Register</Button>
          <Link
            className='link'
            to={'/login'}>
            <Button>Back</Button>
          </Link>
        </Form>
      ) : (
          <Container className='Registered'>
            <p className='register-welcome'>Welcome</p>
            <h1 className='register-first-name'>{props.user.first_name}!</h1>
            <p className='register-thanks'>Thanks for coming to my shop!</p>
            <Link
              className='link'
              to={'/products'}>
              <p className='register-check-out'>Check out some of my products</p>
            </Link>
          </Container>
        )}
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user,
    ...reduxState.isLoggedIn,
    ...reduxState.isRegistered
  }
}

export default connect(mapStateToProps, { registerUser })(withRouter(Register))