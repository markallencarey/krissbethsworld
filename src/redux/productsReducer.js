import axios from 'axios'

const initialState = {
  products: [],
  product: {},
  productIsLoading: true,
}

const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS'
const GET_ONE_PRODUCT = 'GET_ONE_PRODUCT'

export function getAllProducts() {
  const res = axios.get('/api/products')

  return {
    type: GET_ALL_PRODUCTS,
    payload: res,
  }
}

export function getOneProduct(productId) {
  const res = axios.get(`/api/products/${productId}`)
  return {
    type: GET_ONE_PRODUCT,
    payload: res,
  }
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS + '_PENDING':
      return {
        ...state,
        productIsLoading: true
      }
    case GET_ALL_PRODUCTS + '_FULFILLED':
      return {
        ...state,
        productIsLoading: false,
        products: action.payload.data
      }
    case GET_ALL_PRODUCTS + '_REJECTED':
      return {
        ...state,
        productIsLoading: false
      }
    case GET_ONE_PRODUCT + '_PENDING':
      return {
        ...state,
        productIsLoading: true
      }
    case GET_ONE_PRODUCT + '_FULFILLED':
      return {
        ...state,
        productIsLoading: false,
        product: action.payload.data
      }
    case GET_ONE_PRODUCT + '_REJECTED':
      return {
        ...state,
        productIsLoading: false
      }
    default:
      return state
  }
}