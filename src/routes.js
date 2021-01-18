import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Home/Login'
import Register from './Components/Home/Register'
import Products from './Components/Products/Products'
import SingleProduct from './Components/Products/SingleProduct'
import Loading from './Components/Home/Loading'
import LoggedOut from './Components/Home/LoggedOut'
import StripeSuccess from './Components/Header/StripeSuccess'
import StripeCanceled from './Components/Header/StripeCanceled'

export default (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/login/register' component={Register} />
    <Route path='/loggedout' component={LoggedOut} />
    <Route exact path='/products' component={Products} />
    <Route path='/products/:product_id' component={SingleProduct} />
    <Route path='/loading' component={Loading} />
    <Route exact path='/checkout/success' component={StripeSuccess} />
    <Route exact path='/checkout/canceled' component={StripeCanceled} />
  </Switch>
)