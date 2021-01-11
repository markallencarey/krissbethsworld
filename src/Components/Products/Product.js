import React, { useState } from 'react'

/*data object:
  description
  id
  img
  name
  price
  store_quantity
  type
*/
const SingleProduct = (props) => {

  return (
    <div className='product-list-item'>
      <img className='product-img' src={props.product.img} />
      <p className='product-name'>{props.product.name}</p>
      <p className='product-price'>${props.product.price}</p>
    </div>
  )
}

export default SingleProduct