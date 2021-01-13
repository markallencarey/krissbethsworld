import axios from 'axios'
import React, { useState } from 'react'

const Register = (props) => {

  const [email, setEmail] = useState([])
  const [password, setPassword] = useState([])
  const [firstName, setFirstName] = useState([])
  const [lastName, setLastName] = useState([])
  const [address, setAddress] = useState([])
  const [aptNo, setAptNo] = useState([])
  const [city, setCity] = useState([])
  const [state, setState] = useState([])
  const [country, setCountry] = useState([])
  const [zipCode, setZipCode] = useState([])
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

  function handleAddressInput(value) {
    setAddress(value)
  }

  function handleAptNoInput(value) {
    setAptNo(value)
  }

  function handleCityInput(value) {
    setCity(value)
  }

  function handleStateInput(value) {
    setState(value)
  }

  function handleCountryInput(value) {
    setCountry(value)
  }

  function handleZipCodeInput(value) {
    setZipCode(value)
  }

  function handlePhoneNoInput(value) {
    setPhoneNo(value)
  }

  function register() {
    axios.post('/auth/register', { email, password, firstName, lastName, address, aptNo, city, state, country, zipCode, phoneNo }).then(res => {
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setAddress('')
      setAptNo('')
      setCity('')
      setState('')
      setCountry('')
      setZipCode('')
      setPhoneNo('')
    }).catch(err => {
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
      setAddress('')
      setAptNo('')
      setCity('')
      setState('')
      setCountry('')
      setZipCode('')
      setPhoneNo('')
      console.log(err)
    })
  }

  return (
    <div className='Register'>
      <div>
        <p>Email: </p>
        <form>
          <input
            type='text'
            placeholder='email'
            value={email}
            onChange={e => handleEmailInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Password: </p>
        <form>
          <input
            type='text'
            placeholder='password'
            value={password}
            onChange={e => handlePasswordInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>First Name: </p>
        <form>
          <input
            type='text'
            placeholder='first name'
            value={firstName}
            onChange={e => handleFirstNameInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Last Name: </p>
        <form>
          <input
            type='text'
            placeholder='last name'
            value={lastName}
            onChange={e => handleLastNameInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Address: </p>
        <form>
          <input
            type='text'
            placeholder='address'
            value={address}
            onChange={e => handleAddressInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Apt No: </p>
        <form>
          <input
            type='text'
            placeholder='#1 or Apt 1'
            value={aptNo}
            onChange={e => handleAptNoInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>City: </p>
        <form>
          <input
            type='text'
            placeholder='city'
            value={city}
            onChange={e => handleCityInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>State: </p>
        <form>
          <input
            type='text'
            placeholder='state'
            value={state}
            onChange={e => handleStateInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Country: </p>
        <form>
          <input
            type='text'
            placeholder='country'
            value={country}
            onChange={e => handleCountryInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Zip Code: </p>
        <form>
          <input
            type='text'
            placeholder='00000'
            value={zipCode}
            onChange={e => handleZipCodeInput(e.target.value)}
          />
        </form>
      </div>
      <div>
        <p>Phone Number: </p>
        <form>
          <input
            type='text'
            placeholder='(000) 000-0000'
            value={phoneNo}
            onChange={e => handlePhoneNoInput(e.target.value)}
          />
        </form>
      </div>

      <button onClick={register}>Register</button>
    </div>
  )
}

export default Register