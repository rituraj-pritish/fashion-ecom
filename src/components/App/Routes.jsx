import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'components/pages/Home'
import SignIn from 'components/pages/SignIn'
import Account from 'components/pages/Account'
import SignUp from 'components/pages/SignUp'
import Cart from 'components/pages/Cart'
import Wishlist from 'components/pages/Wishlist'
import Products from 'components/pages/Products'
import PrivateRoute from 'components/PrivateRoute'
import Payment from 'components/pages/Payment'
import Product from 'components/pages/Product'
import SearchResults from 'components/SearchResults'
import Orders from 'components/pages/Orders'
import Review from 'components/pages/Review'
import Reviews from 'components/pages/Reviews'
import ForgotPassword from 'components/pages/ForgotPassword'

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path='/product/:productId/variant/:variantId'
        component={Product}
      />
      <Route exact path='/products/:productsCategory' component={Products} />
      <Route exact path='/s/:searchQuery' component={SearchResults} />
      <Route exact path='/user/cart' component={Cart} />
      <PrivateRoute exact path='/user/wishlist' component={Wishlist} />
      <PrivateRoute exact path='/user/checkout' component={Payment} />
      <PrivateRoute exact path='/user/account' component={Account} />
      <PrivateRoute exact path='/user/orders' component={Orders} />
      <PrivateRoute
        exact
        path='/user/review/:orderId/p/:productId/v/:variantId'
        component={Review}
      />
      <Route exact path='/reviews/:productId' component={Reviews} />
      <Route exact path='/signin' component={SignIn} />
      <Route exact path='/forgot-password' component={ForgotPassword} />
      <Route exact path='/signup' component={SignUp} />
      <Route path='/' component={Home} />
    </Switch>
  )
}

export default Routes
