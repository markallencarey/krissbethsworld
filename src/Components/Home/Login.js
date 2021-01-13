import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

const Login = (props) => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [firstName, setFirstName] = useState([])
  //put logged in on redux
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    axios.get('/auth/user').then(res => {
      console.log(res.data)
      setFirstName(res.data.first_name)
    })
  }, [])

  function handleEmailInput(value) {
    setEmail(value)
  }

  function handlePasswordInput(value) {
    setPassword(value)
  }

  function login() {
    axios.post('/auth/login', { email, password }).then(res => {
      //set user on redux
      //then route to wherever
      setEmail('')
      setPassword('')
      setFirstName(res.data.first_name)
      //put logged in on redux
      setIsLoggedIn(true)
    }).catch(err => {
      setEmail('')
      setPassword('')
      console.log(err)
    })
  }

  return (
    <div className='Login'>
      {!isLoggedIn ? (
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
          <Link to={'/login/register'}>
            <button>Register</button>
          </Link>
        </div>
      ) : (
          <div className='login-welcome-back'>
            <p>Welcome back,</p>
            <p>{firstName}!</p>
            <Link to={'/products'}>
              <p>Shop</p>
            </Link>
          </div>
        )}




    </div>
  )
}

export default withRouter(Login)