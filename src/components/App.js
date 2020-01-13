import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';

import theme from '../theme';
import Navbar from './layout/navbar/Navbar';
import TopButton from './layout/top-button/TopButton';
import Footer from './layout/footer/Footer';
import Home from './pages/home/Home';
import MailListModal from './mail-list-modal/MailListModal';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';

function App({ auth }) {
  const [showMaillistModal, setShowMailListModal] = useState(false);

  useEffect(() => {
    const displayed = window.localStorage.getItem('mailModalDisplayed');

    if (displayed === null) {
      setShowMailListModal(true);
      window.localStorage.setItem('mailModalDisplayed', true);
    }
  }, []);

  if (!auth.isLoaded) {
    return <div>Loading......</div>;
  }

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <TopButton />
          <Switch>
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route path='/' component={Home} />
          </Switch>
          <Footer />
          <MailListModal
            open={showMaillistModal}
            setOpen={setShowMailListModal}
          />
        </Router>
      </ThemeProvider>
    </Fragment>
  );
}

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    'products/shoes/shoeItems',
    'products/accessories/accItems'
  ])
)(App);
