import { connect } from 'react-redux'

import {
  removeFromCart,
  updateCart,
  saveForLater,
  backToCart,
  addToCart
} from 'redux/cart'
import { removeFromWishlist } from 'redux/wishlist'
import CartItem from './CartItem'

const mapStateToProps = ({ cart, wishlist }, { page, variantId, productId }) => ({
  isLoading:
    page === 'cart'
      ? cart.isLoading && cart.inFocus === variantId
      : wishlist.isLoading && wishlist.inFocus === productId,
  isSavedForLater: cart.forLater.find(item => item.variantId === variantId)
})

export default connect(mapStateToProps, {
  updateCart,
  removeFromCart,
  removeFromWishlist,
  saveForLater,
  backToCart
})(CartItem)