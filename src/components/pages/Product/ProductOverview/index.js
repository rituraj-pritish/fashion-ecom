import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { addToCart } from 'redux/cart'
import { addToWishlist } from 'redux/wishlist'
import ProductOverview from './ProductOverview'

const mapStateToProps = (
  { cart, wishlist, auth },
  {
    match: {
      params: { productId, variantId }
    }
  }
) => ({
  cart: cart.items,
  wishlist: wishlist.items,
  isAuthenticated: auth.isAuthenticated,
  cartLoading: cart.isLoading && cart.inFocus === variantId,
  variantId
})

export default withRouter(
  connect(mapStateToProps, {
    addToCart,
    addToWishlist
  })(ProductOverview)
)
