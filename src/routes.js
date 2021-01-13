import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'
import Checkout from './Components/Cart/Checkout'
import Login from './Components/Home/Login'
import Register from './Components/Home/Register'
import Products from './Components/Products/Products'
import SingleProduct from './Components/Products/SingleProduct'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cart' component={Cart} />
    <Route path='/checkout' component={Checkout} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/login/register' component={Register} />
    <Route exact path='/products' component={Products} />
    <Route path='/products/:product_id' component={SingleProduct} />
  </Switch>
)