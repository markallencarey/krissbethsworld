import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getOneProduct } from '../../redux/productsReducer'
import { updateCart } from '../../redux/cartReducer'
import Loading from '../Home/Loading'
import { MdKeyboardArrowLeft } from 'react-icons/md'

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

      axios.post('/api/cart', body).then(res => {
        props.updateCart(res.data)
      })
      setProductQuantity(1)

      if (productQuantity === 1) {
        alert(`${productQuantity} ${props.product.name} were added to your cart!`)
      } else if (productQuantity > 1) {
        alert(`${productQuantity} ${props.product.name}s were added to your cart!`)
      }
    } else {
      alert('Please log in!')
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
      {props.productIsLoading ? (
        <Loading />
      ) : (
          <div className='single-product'>
            <div className='single-product-header'>
              <Link
                to={'/products'}
                className='link'
              >
                <div className='single-product-back-btn'>
                  <MdKeyboardArrowLeft
                    size='22' />
                  <p className='single-product-back-text'>Shop</p>
                </div>
              </Link>
            </div>
            <div className='single-product-body'>
              <img className='single-product-img'
                src={props.product.img} alt='product' />
              <div className='single-product-name-div'>
                <p className='single-product-name'>{props.product.name}</p>
              </div>
              <p className='single-product-price'>${props.product.price}</p>
              <button
                className='add-to-cart-btn'
                onClick={(() => addToCart(productQuantity))}
              >ADD TO CART</button>
              <div className='quantity-div'>

                <button
                  className='decrease-quantity-btn'
                  onClick={decreaseQuantity}
                >-</button>
                <p>{productQuantity}</p>
                <button
                  className='increase-quantity-btn'
                  onClick={increaseQuantity}
                >+</button>
              </div>

              <div className='single-product-description-container'>
                <p className='single-product-description'>{props.product.description}</p>
              </div>
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

export default connect(mapStateToProps, { getOneProduct, updateCart })(withRouter(SingleProduct))