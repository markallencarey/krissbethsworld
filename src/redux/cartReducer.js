const initialState = {
  cart: [],
}

const UPDATE_CART = 'UPDATE_CART'
// const CHANGE_QUANTITY = 'CHANGE_QUANTITY'
// const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
const CLEAR_CART = 'CLEAR_CART'

export function updateCart(cart) {
  // console.log(product)
  return {
    type: UPDATE_CART,
    payload: cart,
  }
}

// export function changeQuantity(product) {
//   return {
//     type: CHANGE_QUANTITY,
//     payload: product,
//   }
// }

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
      return {...state, cart: action.payload}
    // case CHANGE_QUANTITY:
    //   const newCart = [...state.cart, action.payload]
    //   return {}
    // case REMOVE_FROM_CART:
    //   return {}
    case CLEAR_CART:
      return { ...state,  cart: []}
    default:
      return state
  }
}