import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getProduct,
  removeProduct,
  addToCart,
  addToWishlist,
  setAlert
} from '../../../../redux/actions/userActions';
import { PageContainer } from '../../../../index.styles';

import Loader from '../../../layout/loader/Loader'
import ProductOverview from '../product-overview/ProductOverview';
import ProductDetails from '../product-details/ProductDetails';
import ProductCarousel from '../../../product-carousel/ProductCarousel';
import PRODUCTS from '../../../../data/PRODUCTS';

const ProductPage = ({
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
  const [variant, setVariant] = useState(0);

  useEffect(() => {
    getProduct(productCategory, productId);

    return () => {
      removeProduct();
    };
    // eslint-disable-next-line
  }, [match.params]);

  if (loading || product === null) return <Loader/>;

  return (
    <PageContainer>
      <ProductOverview
        auth={auth}
        setAlert={setAlert}
        product={product}
        variant={variant}
        setVariant={setVariant}
        cart={cart}
        wishlist={wishlist}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />

      <ProductCarousel
        title='Similar Products'
        data={Object.values(PRODUCTS).flat()}
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
})(ProductPage);

ProductPage.propTypes = {
  product: PropTypes.object
};
