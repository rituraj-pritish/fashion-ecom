import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import ReactTooltip from 'react-tooltip'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { authStateChangeHandler } from 'redux/auth'
import { getProducts } from 'redux/products'
import Navbar from 'components/layout/Navbar'
import Home from 'components/pages/Home'
import SignIn from 'components/pages/SignIn'
import SignUp from 'components/pages/SignUp'
import Cart from 'components/pages/Cart'
import TopButton from 'components/layout/TopButton'
import Wishlist from 'components/pages/Wishlist'
import Loader from 'components/layout/Loader'
import Products from 'components/pages/Products'
import PrivateRoute from 'components/PrivateRoute'
import ScrollToTop from 'components/ScrollToTop'
import Payment from 'components/pages/Payment'
import Product from 'components/pages/Product'
import Overlay from 'components/layout/Overlay'
import Footer from 'components/layout/Footer'
import SearchResults from 'components/SearchResults'
import theme from 'theme'

const App = ({ isLoading, getProducts, authStateChangeHandler }) => {
  useEffect(() => {
    authStateChangeHandler()
    getProducts()
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <ScrollToTop>
            <Switch>
              <Route exact path='/product/:productId' component={Product} />
              <Route
                exact
                path='/products/:productsCategory'
                component={Products}
              />
              <Route exact path='/s/:searchQuery' component={SearchResults} />
              <Route exact path='/user/cart' component={Cart} />
              <PrivateRoute exact path='/user/wishlist' component={Wishlist} />
              <PrivateRoute exact path='/user/checkout' component={Payment} />
              <Route exact path='/signin' component={SignIn} />
              <Route exact path='/signup' component={SignUp} />
              <Route path='/' component={Home} />
            </Switch>
          </ScrollToTop>

          <TopButton />
          <Footer />
        </Router>
      </ThemeProvider>
      <ReactNotification />
      <ReactTooltip />
      <Overlay />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  isLoading: state.app.isLoading
})

export default connect(mapStateToProps, {
  getProducts,
  authStateChangeHandler
})(App)
