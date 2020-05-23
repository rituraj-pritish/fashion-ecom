import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { addToCart, addToWishlist } from 'redux/products'
import setAlert from 'setAlert'
import Loader from 'components/layout/Loader'
import ProductOverview from './ProductOverview'
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
  products
}) => {
  const [variant, setVariant] = useState(0)
  
  useEffect(
    () => () => {
      setVariant(0)
    },
    [product.id]
  )

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
  { products: { allProducts, cart, wishlist }, user, auth },
  { match }
) => {
  const { productId } = match.params
  const product = allProducts.find(product => product.id === productId)

  return {
    product,
    products: allProducts,
    cart: cart,
    wishlist: wishlist,
    isAuthenticated: auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {
  addToCart,
  addToWishlist
})(ProductPage)
