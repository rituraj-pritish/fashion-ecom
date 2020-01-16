import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import userIcon from '../../../assets/user-icon.svg';
import cartIcon from '../../../assets/cart.svg';
import logo from '../../../assets/logo.svg';

import { MaxWidthContainer } from '../../../index.styles';
import { Nav, Logo, Search, NavLinks, Cart, Nothing } from './Navbar.styles';
import NavUserOptions from './NavUserOptions';

const Navbar = ({ history, cart }) => {
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (
      history.location.pathname === '/signin' ||
      history.location.pathname === '/signup'
    ) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [history.location]);

  const handleCart = () => {
    if (showCart === true) {
      setShowCart(false);
      return;
    }
    if (cart.length === 0) {
      setShowCart(true);
    } else {
      history.push('/cart');
      setShowCart(false);
    }
  };

  const nothingInCart = <Nothing>Cart is empty.</Nothing>;

  return (
    <Nav show={show}>
      <MaxWidthContainer style={{ display: 'flex' }}>
        <Link to='/'>
          <Logo className='logo' src={logo} alt='logo' />
        </Link>

        <Search className='search'>
          <input type='text' className='search-input' />
          <button className='search-btn'>Search</button>
        </Search>
        <NavLinks>
          <li onClick={() => setShowUserOptions(!showUserOptions)}>
            <img src={userIcon} alt='userIcon' />

            <NavUserOptions
              show={showUserOptions}
              setShow={setShowUserOptions}
            />
          </li>

          <Cart onClick={handleCart}>
            <img className='cart-icon' src={cartIcon} alt='' />
            <span className='cart-count'>{cart.length}</span>
            {showCart && nothingInCart}
          </Cart>
        </NavLinks>
      </MaxWidthContainer>
    </Nav>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart
});

export default withRouter(connect(mapStateToProps)(Navbar));
