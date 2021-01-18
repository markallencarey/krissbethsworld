import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../redux/userReducer'
import { updateCart } from '../../redux/cartReducer'
import { Link, withRouter } from 'react-router-dom'

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
    <div className='Login'>
      {!props.isLoggedIn ? (
        <div className='login-form'>
          <div className='login-form-email'>
            <p >Email: </p>
            <form>
              <input
                type='email'
                placeholder='email'
                value={email}
                onChange={e => handleEmailInput(e.target.value)}
              />
            </form>
          </div>

          <div className='login-form-password'>
            <p >Password: </p>
            <form>
              <input
                type='password'
                placeholder='password'
                value={password}
                onChange={e => handlePasswordInput(e.target.value)}
              />
            </form>
          </div>

          <button
            className='login-form-login-btn'
            onClick={login}>Login</button>
          <div className='login-form-register'>
            <p>New user?</p>
            <Link
              className='link'
              to={'/login/register'}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      ) : (
          <div className='login-welcome-back'>
            <p className='welcome-back'>Welcome back,</p>
            <p className='login-first-name'>{props.user.first_name}!</p>
            <Link
              className='link'
              to={'/products'}>
              <p className='check-out-shop'>Check out my shop</p>
            </Link>
            <button onClick={logout}>Log Out</button>
          </div>
        )}
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.user, ...reduxState.cart
  }
}

export default connect(mapStateToProps, { loginUser, logoutUser, updateCart })(withRouter(Login))