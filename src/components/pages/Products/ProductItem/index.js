import { connect } from 'react-redux'

import { addToCart } from 'redux/cart'
import { addToWishlist } from 'redux/wishlist'
import ProductItem from './ProductItem'

const mapStateToProps = state => ({
  cart: state.cart.items,
  wishlist: state.wishlist.items,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { addToCart, addToWishlist })(
  ProductItem
)