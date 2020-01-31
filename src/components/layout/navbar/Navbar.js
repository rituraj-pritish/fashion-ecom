import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import userIcon from '../../../assets/user-icon.svg';
import cartIcon from '../../../assets/cart.svg';
import Logo from '../../../assets/Logo';

import SearchBar from './search-bar/SearchBar';
import {
  Nav,
  Search,
  NavLinks,
  Cart,
  Nothing,
  Container,
  SearchIcon,
  StyledLogo
} from './Navbar.styles';
import NavUserOptions from './NavUserOptions';
import clickOutside from '../../../helpers/clickOutside';
import { search } from '../../../redux/actions/userActions';

const Navbar = ({ history, cart, search }) => {
  const [showUserOptions, setShowUserOptions] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [show, setShow] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const node = useRef();
  const cartRef = useRef();
  const userRef = useRef();

  clickOutside(node, () => setShowCart(false), cartRef);

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
    if (showCart) {
      setShowCart(false);
      return;
    }
    if (cart.length === 0) {
      setShowCart(true);
    } else {
      history.push('/user/cart');
      setShowCart(false);
    }
  };

  const handleSearch = e => {
    e.preventDefault();

    search(searchQuery);
    history.push(`/products/${searchQuery}`);
  };

  const nothingInCart = <Nothing ref={node}>Cart is empty.</Nothing>;

  return (
    <Nav show={show}>
      <Container>
        <StyledLogo>
          <Link to='/'>
            <Logo />
          </Link>
        </StyledLogo>

        <Search onSubmit={handleSearch} className='search'>
          <input
            type='text'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className='search-input'
          />
          <button className='search-btn'>Search</button>
        </Search>
        <NavLinks>
          <SearchIcon onClick={() => setShowSearchBar(true)}>
            <i className='fas fa-search' />
          </SearchIcon>
          <SearchBar
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <li
            ref={userRef}
            onClick={() => setShowUserOptions(!showUserOptions)}
          >
            <img src={userIcon} alt='userIcon' />

            <NavUserOptions
              userRef={userRef}
              show={showUserOptions}
              setShow={setShowUserOptions}
            />
          </li>

          <Cart ref={cartRef} onClick={handleCart}>
            <img className='cart-icon' src={cartIcon} alt='' />
            <span className='cart-count'>{cart.length}</span>
            {showCart && nothingInCart}
          </Cart>
        </NavLinks>
      </Container>
    </Nav>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart
});

export default withRouter(connect(mapStateToProps, { search })(Navbar));
