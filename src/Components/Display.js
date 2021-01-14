import React from 'react'
import axios from 'axios'
import routes from '../routes.js'
import Header from './Header/Header.js'


const Display = (props) => {

  // const [cart, setCart] = useState([])

  // function addToCart(id, quantity) {
  //   const body = { product_id: id, quantity }
    
  //   axios.post('/api/cart', body).then(res => {
  //     console.log(res.data)
  //     setCart(res.data)
  //   }, [])
  // }

  return (
    <div className='Display'>
        <Header />
        {routes}
    </div >
  )
}

export default Display