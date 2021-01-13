import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const Login = (props) => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])

  function handleEmailInput(value) {
    setEmail(value)
  }

  function handlePasswordInput(value) {
    setPassword(value)
  }

  function login() {
    axios.post('/auth/login', { email, password }).then(res => {
      setEmail('')
      setPassword('')
    }).catch(err => {
      setEmail('')
      setPassword('')
      console.log(err)
    })
  }

  return (
    <div className='Login'>
      <p>Email: </p>
      <form>
        <input
          type='text'
          placeholder='email'
          value={email}
          onChange={e => handleEmailInput(e.target.value)}
        />
      </form>
      <p>Password: </p>
      <form>
        <input
          type='text'
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
  )
}

export default withRouter(Login)