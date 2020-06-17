import { connect } from 'react-redux'

import { addToCart } from 'redux/cart'
import { addToWishlist } from 'redux/wishlist'
import ProductItem from './ProductItem'

const mapStateToProps = ({ auth, cart, wishlist, currency }) => ({
  isLoading: cart.isLoading,
  inFocus: cart.inFocus,
  cart: cart.items,
  wishlist: wishlist.items,
  isAuthenticated: auth.isAuthenticated,
  currency: currency.currency
})

export default connect(mapStateToProps, { addToCart, addToWishlist })(
  ProductItem
)
