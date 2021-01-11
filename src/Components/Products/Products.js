import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'

const Products = (props) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('/api/products').then(res => {
      setProducts(res.data)
    }).catch(err => console.log(err))
  }, [])

  const productMap = products.map(element => {
    return (
      <Product key={element.id} product={element} />
    )
  })

  return (
    <div className='product-list'>
        {productMap}
    </div>
  )
}

export default Products