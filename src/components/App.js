import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import theme from '../theme';
import Navbar from './layout/navbar/Navbar';
import Home from './pages/home/home/Home';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import { getProducts } from '../redux/actions/userActions';
import Cart from './pages/cart/cart-container/Cart';
import TopButton from './layout/top-button/TopButton';
import Wishlist from './pages/wishlist/Wishlist';
import Loader from './layout/loader/Loader';
import Products from './pages/products/products/Products';
import PrivateRoute from './PrivateRoute';
import ScrollToTop from './ScrollToTop';
import PaymentsPage from './payments/payments-page/PaymentsPage';
import ProductPage from './pages/product/product-page/ProductPage';
import Overlay from './layout/overlay/Overlay';
import Footer from './layout/footer/Footer';

function App({ auth, getProducts }) {
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  if (!auth.isLoaded) {
    return <Loader />;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path='/product/:productCategory/:productId'
                component={ProductPage}
              />
              <Route
                exact
                path='/products/:productsCategory'
                component={Products}
              />
              <Route exact path='/user/cart' component={Cart} />
              <PrivateRoute exact path='/user/wishlist' component={Wishlist} />
              <PrivateRoute
                exact
                path='/user/checkout'
                component={PaymentsPage}
              />
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
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { getProducts })(App);
