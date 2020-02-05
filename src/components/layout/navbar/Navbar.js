import React, { useState, useEffect, useRef } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import UserIcon from '../../../assets/icons/UserIcon';
import CartIcon from '../../../assets/icons/CartIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import Logo from '../../../assets/Logo';
import Icon from '../../common/Icon';

import SearchBar from './search-bar/SearchBar';
import {
  Nav,
  Search,
  NavLinks,
  Cart,
  Nothing,
  Container,
  SearchIconContainer,
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
    setSearchQuery('');
    search(searchQuery);
    history.push(`/products/${searchQuery}`);
  };

  const nothingInCart = <Nothing ref={node}>Cart is empty.</Nothing>;

  return (
    <Nav id='my-nav' show={show}>
      <Container>
        <StyledLogo show={showSearchBar}>
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
          <SearchIconContainer onClick={() => setShowSearchBar(true)}>
            <Icon>
              <SearchIcon />
            </Icon>
          </SearchIconContainer>
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
            <Icon height='35px' mb='5px'>
              <UserIcon />
            </Icon>

            <NavUserOptions
              userRef={userRef}
              show={showUserOptions}
              setShow={setShowUserOptions}
            />
          </li>

          <Cart ref={cartRef} onClick={handleCart}>
            <Icon width='30px'>
              <CartIcon />
            </Icon>
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
