import React, { useState, useEffect } from 'react'
import axios from 'axios'

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

  const [singleProduct, setSingleProduct] = useState([])

  useEffect(() => {
    axios.get(`/api/products/${props.match.params.product_id}`).then(res => {
      setSingleProduct(res.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div className='single-product'>
      <img className='single-product-img'
        src={singleProduct.img} alt='product'/>
      <p className='single-product-name'>{singleProduct.name}</p>
      <p className='single-product-price'>${singleProduct.price}</p>
      <button className='add-to-cart-btn'>ADD TO CART</button>
      <div className='single-product-description-container'>
        <p className='single-product-description'>{singleProduct.description}</p>
      </div>
    </div>
  )
}

export default SingleProduct