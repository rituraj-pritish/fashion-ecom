import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  addToCart,
  addToWishlist,
  setAlert
} from 'redux/actions/userActions'
import Loader from 'components/layout/Loader'
import ProductOverview from './product-overview/ProductOverview'
import ProductCarousel from 'components/ProductCarousel'
import { PageContainer } from 'index.styles' 

const ProductPage = ({
  product,
  loading,
  wishlist,
  cart,
  addToCart,
  addToWishlist,
  isAuthenticated,
  setAlert,
  products
}) => {
  const [variant, setVariant] = useState(0)

  if (loading || product === null) return <Loader />

  return (
    <PageContainer>
      <ProductOverview
        isAuthenticated={isAuthenticated}
        setAlert={setAlert}
        product={product}
        variant={variant}
        setVariant={setVariant}
        cart={cart}
        wishlist={wishlist}
        addToCart={addToCart}
        addToWishlist={addToWishlist}
      />

      <ProductCarousel title='Similar Products' data={products} />
    </PageContainer>
  )
}

ProductPage.propTypes = {
  product: PropTypes.object
}

const mapStateToProps = (
  { products: { allProducts }, user, auth },
  { match }
) => {
  const { productId } = match.params
  const product = allProducts.find(product => product.id === productId)

  return {
    product,
    products: allProducts,
    cart: user.cart,
    wishlist: user.wishlist,
    loading: user.loading,
    isAuthenticated: auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {
  addToCart,
  addToWishlist,
  setAlert
})(ProductPage)
