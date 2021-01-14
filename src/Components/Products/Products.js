import React, { useEffect } from 'react'
import Product from './Product'
import Loading from '../Home/Loading'
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/productsReducer'

const Products = (props) => {

  const {getAllProducts} = props

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <div className='product-list'>
      {props.isLoading ? (
        <Loading />
      ) : (
        props.products.map(element => {
          return (
            <Product key={element.id} product={element} />
          )
        })
      )}
    </div>
  )
}

function mapStateToProps(reduxState) {
  return reduxState.products
}

export default connect(mapStateToProps, { getAllProducts })(Products)