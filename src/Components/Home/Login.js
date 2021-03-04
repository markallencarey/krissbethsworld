import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../redux/userReducer'
import { updateCart } from '../../redux/cartReducer'
import { Link, withRouter } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap'

const Login = (props) => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  useEffect(() => {
    axios.get('/auth/user').then(res => {
      console.log(res.data)
    })
  }, [])

  function handleEmailInput(value) {
    setEmail(value)
  }

  function handlePasswordInput(value) {
    setPassword(value)
  }

  function login() {
    if (email === '' && password === '') {
      alert('Please enter your email and password')
    } else if (password === '') {
      alert('Please enter your password')
    } else if (email === '') {
      alert('Please enter your email')
    } else {
      axios.post('/auth/login', { email, password }).then(res => {
        setEmail('')
        setPassword('')
        props.loginUser(res.data)
      }).catch(err => {
        setEmail('')
        setPassword('')
        console.log(err)
      })
    }
  }

  function logout() {
    axios.delete('/auth/logout').then(res => {
      props.logoutUser()
    })
  }

  return (
    <Container className='Login'>
      {!props.isLoggedIn ? (
        <Form className='login-form' onSubmit={login}>
          <Form.Group className='login-form-group'>
            <Form.Label className='login-form-label'><h6>Email: </h6></Form.Label>
            <Form.Control
              className='login-form-control'
              type='email'
              placeholder='email'
              value={email}
              onChange={e => handleEmailInput(e.target.value)}
            />
          </Form.Group>

          <Form.Group className='login-form-group'>
            <Form.Label className='login-form-label'><h6>Password: </h6></Form.Label>
            <Form.Control
              className='login-form-control'
              type='password'
              placeholder='password'
              value={password}
              onChange={e => handlePasswordInput(e.target.value)}
            />
          </Form.Group>

          <Container>
            <Button
              className='login-form-login-btn button'
              onClick={login}
              variant='light'
              type='submit'
            ><h5>Login</h5></Button>
            <Container className='login-form-register'>
              <h4>New user?</h4>
              <Link
                className='link'
                to={'/login/register'}>
                <Button
                  className='login-form-register-btn button'
                  variant='light'
                ><h5>Register</h5></Button>
              </Link>
            </Container>
          </Container>
        </Form>
      ) : (
          <Container className='login-welcome-back'>
            <h5 className='welcome-back'>Welcome back,</h5>
            <h1 className='login-first-name'>{props.user.first_name}!</h1>
            <Link
              className='link'
              to={'/products'}>
              <h5 className='check-out-shop'>Check out my shop</h5>
            </Link>
            <Link
              className='link'
              to={'/loggedout'}
            >
              <Button
                className='button'
                onClick={logout}>Log Out
                </Button>
            </Link>
          </Container>
        )}
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user, ...reduxState.cart
  }
}

export default connect(mapStateToProps, { loginUser, logoutUser, updateCart })(withRouter(Login))