import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

/*data object:
  description
  id
  img
  name
  price
  store_quantity
  type
*/
const Product = (props) => {

  return (
    <div className='product-list-item'>
      <Link
        className='link'
        to={`/products/${props.product.id}`}>
        <img className='product-img' src={props.product.img} alt='product'/>
        <p className='product-name'>{props.product.name}</p>
        <p className='product-price'>${props.product.price}</p>
      </Link>
    </div>
  )
}

export default withRouter(Product)