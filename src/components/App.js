import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import theme from '../theme';
import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';
import Home from './pages/home/Home';
import MailListModal from './mail-list-modal/MailListModal';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import ProductDetails from './product/product-details/ProductDetails';
import { getProducts } from '../redux/actions/userActions';
import Cart from './pages/cart/cart-container/Cart';
import TopButton from './layout/top-button/TopButton';

function App({ auth, getProducts }) {
  const [showMaillistModal, setShowMailListModal] = useState(false);

  useEffect(() => {
    const displayed = window.localStorage.getItem('mailModalDisplayed');

    if (displayed === null) {
      setShowMailListModal(true);
      window.localStorage.setItem('mailModalDisplayed', true);
    }

    getProducts();
  }, []);

  if (!auth.isLoaded) {
    return <div>Loading......</div>;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/product/:productCategory/:productId'
              component={ProductDetails}
            />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route path='/' component={Home} />
          </Switch>
          <TopButton />
          <Footer />
          <MailListModal
            open={showMaillistModal}
            setOpen={setShowMailListModal}
          />
        </Router>
      </ThemeProvider>
      <ReactTooltip />
    </Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { getProducts })(App);
