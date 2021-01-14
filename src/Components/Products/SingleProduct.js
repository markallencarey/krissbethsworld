import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getOneProduct } from '../../redux/productsReducer'
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

  useEffect(() => {
    props.getOneProduct(props.match.params.product_id)
  }, [])

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
            <button className='add-to-cart-btn'>ADD TO CART</button>
            <div className='single-product-description-container'>
              <p className='single-product-description'>{props.product.description}</p>
            </div>
          </div>
        )}
    </div>
  )
}

function mapStateToProps(reduxState) {
  return reduxState.products
}
export default connect(mapStateToProps, { getOneProduct })(SingleProduct)