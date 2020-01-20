import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

import { ItemBottom, ProductItemContainer } from './ProductItem.styles';
import {
  addToCart,
  addToWishlist,
  setAlert
} from '../../../redux/actions/userActions';
import Button from '../../reusable-components/Button';

const ProductItem = ({
  item,
  addToCart,
  addToWishlist,
  cart,
  wishlist,
  auth
}) => {
  const { name, variants, id, category } = item;
  const variant = variants[0];
  const image = variant.images[0];

  const isAddedToCart = cart.find(item => item.product.id === id);
  const isAddedToWishlist = wishlist.find(item => item.product.id === id);

  const handleCartBtn = e => {
    e.preventDefault();

    if (isAddedToCart) return;
    addToCart(item, 0, 1);
  };

  const handleWishlist = () => {
    if (auth.isEmpty) {
      setAlert('Login to add to wishlist', 'danger');
      return;
    }
    if (isAddedToWishlist) return;

    addToWishlist(item, 0);
  };

  return (
    <ProductItemContainer>
      <Link to={`/product/${category}/${id}`}>
        <LazyLoad className='lazyload'>
          <img src={image} alt={image} />
        </LazyLoad>
      </Link>
      <ItemBottom>
        {isAddedToWishlist ? (
          <i className='fas fa-heart' style={{ color: 'red' }} />
        ) : (
          <i className='fas fa-heart' onClick={handleWishlist} />
        )}
        <h3>{name}</h3>
        <p>$ {variant.price}</p>
        <Button onClick={handleCartBtn} secondary={isAddedToCart}>
          {isAddedToCart ? 'ADDED TO CART' : 'ADD TO CART'}
        </Button>
      </ItemBottom>
    </ProductItemContainer>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart,
  wishlist: state.user.wishlist,
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { addToCart, addToWishlist })(
  ProductItem
);

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
};
