import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getOneProduct } from '../../redux/productsReducer'
import { updateCart } from '../../redux/cartReducer'
import Loading from '../Home/Loading'

/*
  data object: {
    description
    id
    img
    name
    price
    store_quantity
    type
  }
*/

const SingleProduct = (props) => {

  const [productQuantity, setProductQuantity] = useState(1)

  useEffect(() => {
    props.getOneProduct(props.match.params.product_id)
  }, [])

  function addToCart(quantity) {
    if (props.isLoggedIn) {
      const body = { product_id: props.match.params.product_id, quantity: quantity }
      console.log(props.match.params.product_id)
  
      axios.post('/api/cart', body).then(res => {
        props.updateCart(res.data)
      })
    } else {
      alert('Please log in before adding to cart')
    }
    
  }

  function increaseQuantity() {
    setProductQuantity(productQuantity + 1)
  }

  function decreaseQuantity() {
    setProductQuantity(productQuantity - 1)
  }

  return (
    <div >
      {props.isLoading ? (
        <Loading />
      ) : (
          <div className='single-product'>
            <img className='single-product-img'
              src={props.product.img} alt='product' />
            <p className='single-product-name'>{props.product.name}</p>
            <p className='single-product-price'>${props.product.price}</p>
            <button
              className='add-to-cart-btn'
              onClick={(() => addToCart(productQuantity))}
            >ADD TO CART</button>
            <div className='quantity-div'>
              <button
                className='increase-quantity-btn'
                onClick={increaseQuantity}
              >+</button>
              <p>{productQuantity}</p>
              <button
                className='decrease-quantity-btn'
                onClick={decreaseQuantity}
              >-</button>
            </div>
            
            <div className='single-product-description-container'>
              <p className='single-product-description'>{props.product.description}</p>
            </div>
          </div>
        )}
    </div>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.products,
    ...reduxState.cart,
    ...reduxState.user
  }
}

export default connect(mapStateToProps, { getOneProduct, updateCart })(SingleProduct)