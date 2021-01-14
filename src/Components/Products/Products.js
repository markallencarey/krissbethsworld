import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
import Loading from '../Home/Loading'
import { connect } from 'react-redux'
import { getAllProducts } from '../../redux/productsReducer'

const Products = (props) => {

  // const [products, setProducts] = useState([])

  // useEffect(() => {
  //   axios.get('/api/products').then(res => {
  //     setProducts(res.data)
  //   }).catch(err => console.log(err))
  // }, [])
  useEffect(() => {
    props.getAllProducts()
  }, [])

  // const productMap = 

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