import React, { useEffect } from 'react'
import Product from './Product'
import Loading from '../Home/Loading'
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/productsReducer'
import { Container } from 'react-bootstrap'

const Products = (props) => {

  const { getAllProducts } = props

  useEffect(() => {
    getAllProducts()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  return (
    <Container fluid className='product-list'>
      {props.productIsLoading ? (
        <Loading />
      ) : (
          props.products.map(element => {
            return (
              <Product key={element.id} product={element} />
            )
          })
        )}
    </Container>
  )
}

function mapStateToProps(reduxState) {
  return {
    ...reduxState.products
  }
}

export default connect(mapStateToProps, { getAllProducts })(Products)