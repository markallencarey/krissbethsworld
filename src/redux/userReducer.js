const initialState = {
  user: {},
  isLoggedIn: false,
  isRegistered: false,
}

const REGISTER_USER = 'REGISTER_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT = 'LOGOUT'

export function registerUser(user) {
  return {
    type: REGISTER_USER,
    payload: user,
  }
}

export function loginUser(user) {

  return {
    type: LOGIN_USER,
    payload: user,
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
        user: action.payload,
        isRegistered: true,
        isLoggedIn: true
      }
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
        isRegistered: true,
        isLoggedIn: true
      }
    case LOGOUT:
      return initialState
    default:
      return state
  }
}