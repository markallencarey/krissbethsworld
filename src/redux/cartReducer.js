const initialState = {
  cart: [],
}

const UPDATE_CART = 'UPDATE_CART'
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

export function updateCart(cart) {
  return {
    type: UPDATE_CART,
    payload: cart,
  }
}

// export function removeFromCart(product) {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: product,
//   } 
// }

export function clearCart() {
  return {
    type: CLEAR_CART,
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CART:
      return { ...state, cart: action.payload }
    // case REMOVE_FROM_CART:
    //   return {}
    case CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }
}