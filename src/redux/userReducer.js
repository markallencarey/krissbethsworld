const initialState = {
  firstName: '',
  isLoggedIn: false,
  isRegistered: false,
}

const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'

export function registerUser(firstName) {
  return {
    type: REGISTER_USER,
    payload: firstName,
  }
}

export function loginUser(firstName) {
  return {
    type: LOGIN_USER,
    payload: firstName,
  }
}

export function logoutUser() {
  return {
    type: LOGOUT,
  }
}

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        firstName: action.payload,
        isRegistered: true,
      isLoggedIn: true
      }
    case LOGIN_USER:
      return {
        ...state,
        firstName: action.payload,
        isLoggedIn: true
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}