import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import userIcon from '../../../assets/user-icon.svg';
import cart from '../../../assets/cart.svg';
import logo from '../../../assets/logo.svg';

import { MaxWidthContainer } from '../../../index.styles';
import { Nav, Logo, Search, NavLinks, Cart } from './Navbar.styles';
import NavUserOptions from './NavUserOptions';

const Navbar = ({ history }) => {
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

          <Cart>
            <img className='cart-icon' src={cart} alt='' />
            <span className='cart-count'>0</span>
          </Cart>
        </NavLinks>
      </MaxWidthContainer>
    </Nav>
  );
};

export default withRouter(Navbar);
