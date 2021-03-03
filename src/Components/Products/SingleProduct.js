import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getOneProduct } from '../../redux/productsReducer'
import { updateCart } from '../../redux/cartReducer'
import Loading from '../Home/Loading'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import { Container, Image, Button } from 'react-bootstrap'

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

  const { getOneProduct, isLoggedIn, updateCart, product, productIsLoading } = props

  const [productQuantity, setProductQuantity] = useState(1)

  useEffect(() => {
    getOneProduct(props.match.params.product_id)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  function addToCart(quantity) {
    if (isLoggedIn) {
      const body = { product_id: props.match.params.product_id, quantity: quantity }

      axios.post('/api/cart', body).then(res => {
        updateCart(res.data)
      })
      setProductQuantity(1)

      if (productQuantity === 1) {
        alert(`${productQuantity} ${product.name} were added to your cart!`)
      } else if (productQuantity > 1) {
        alert(`${productQuantity} ${product.name}s were added to your cart!`)
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
    <Container fluid>
      {productIsLoading ? (
        <Loading />
      ) : (
          <Container
            fluid
            className='single-product'>
            <Container className='single-product-header'>
              <Link
                to={'/products'}
                className='link'
              >
                <Container
                  className='single-product-back-btn'
                  variant='light'
                >
                  <MdKeyboardArrowLeft
                    size='22'
                    className='single-product-back-arrow'
                  />
                  <h5 className='single-product-back-text'>Shop</h5>
                </Container>
              </Link>
            </Container>
            <Container className='single-product-body'>
              <Image
                fluid
                className='single-product-img'
                src={product.img} alt='product'
              />
              <Container className='single-product-name-div'>
                <h3 className='single-product-name'>{product.name}</h3>
              </Container>
              <h4 className='single-product-price'>${product.price}</h4>
              <Button
                className='add-to-cart-btn button'
                onClick={(() => addToCart(productQuantity))}
                variant='light'
              ><h5>Add to Cart</h5></Button>
              <Container className='quantity-div'>

                <Button
                  className='decrease-quantity-btn button'
                  onClick={decreaseQuantity}
                  variant='light'
                ><h4>-</h4></Button>
                <h4 className='quantity-text'>{productQuantity}</h4>
                <Button
                  className='increase-quantity-btn button'
                  onClick={increaseQuantity}
                  variant='light'
                ><h4>+</h4></Button>
              </Container>

              <Container className='single-product-description-container'>
                <p className='single-product-description'>{product.description}</p>
              </Container>
            </Container>
          </Container>
        )}
    </Container>
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