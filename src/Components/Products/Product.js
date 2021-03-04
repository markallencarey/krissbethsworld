import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { Container, Image } from 'react-bootstrap'

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
    <Container className='product-list-item'>
      <Link
        className='link'
        to={`/products/${props.product.id}`}>
        <Image className='product-img' src={props.product.img} alt='product'/>
        <p className='product-name'>{props.product.name}</p>
        <p className='product-price'>${props.product.price}</p>
      </Link>
    </Container>
  )
}

export default withRouter(Product)