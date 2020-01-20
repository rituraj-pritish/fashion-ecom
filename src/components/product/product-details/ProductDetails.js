import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazy-load';

import {
  getProduct,
  removeProduct,
  addToCart,
  addToWishlist,
  setAlert
} from '../../../redux/actions/userActions';
import { PageContainer } from '../../../index.styles';

import Button from '../../reusable-components/Button';
import ProductOverview from '../product-overview/ProductOverview';

const ProductDetails = ({
  match,
  getProduct,
  removeProduct,
  product,
  loading,
  wishlist,
  cart,
  addToCart,
  addToWishlist,
  auth,
  setAlert
}) => {
  const productCategory = match.params.productCategory;
  const productId = match.params.productId;

  useEffect(() => {
    getProduct(productCategory, productId);

    return () => {
      removeProduct();
    };
  }, [match.params]);

  if (loading || product === null) return <div>Loading...</div>;

  return (
    <PageContainer>
      <ProductOverview
        auth={auth}
        setAlert={setAlert}
        product={product}
        cart={cart}
        wishlist={wishlist}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  product: state.user.currentProduct,
  cart: state.user.cart,
  wishlist: state.user.wishlist,
  loading: state.user.loading,
  auth: state.firebase.auth
});

export default connect(mapStateToProps, {
  getProduct,
  removeProduct,
  addToCart,
  addToWishlist,
  setAlert
})(ProductDetails);

ProductDetails.propTypes = {
  product: PropTypes.object.isRequired
};
