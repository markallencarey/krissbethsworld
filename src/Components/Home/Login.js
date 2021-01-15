import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginUser, logoutUser } from '../../redux/userReducer'
import { Link, withRouter } from 'react-router-dom'

const Login = (props) => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  //put logged in on redux

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
    if (email === '' && password==='') {
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
          <p>Email: </p>
          <form>
            <input
              type='email'
              placeholder='email'
              value={email}
              onChange={e => handleEmailInput(e.target.value)}
            />
          </form>
          <p>Password: </p>
          <form>
            <input
              type='password'
              placeholder='password'
              value={password}
              onChange={e => handlePasswordInput(e.target.value)}
            />
          </form>
          <button onClick={login}>Login</button>
          <p>New user?</p>
          <Link
            className='link'
            to={'/login/register'}>
            <button>Register</button>
          </Link>
        </div>
      ) : (
          <div className='login-welcome-back'>
            <p>Welcome back,</p>
            <p>{props.user.first_name}!</p>
            <Link
              className='link'
              to={'/products'}>
              <p>Check out my shop</p>
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

export default connect(mapStateToProps, { loginUser, logoutUser })(withRouter(Login))