import { connect } from 'react-redux'

import { addToCart } from 'redux/cart'
import { addToWishlist, removeFromWishlist } from 'redux/wishlist'
import ProductCarousel from './ProductCarousel'

const mapStateToProps = state => ({
	isLoading: state.cart.isLoading,
	inFocus: state.cart.inFocus,
	cartIds: state.cart.items.map(({ variantId }) => variantId),
	wishlistIds: state.wishlist.items.map(({ productId }) => productId),
	currency: state.currency.currency
})

export default connect(mapStateToProps, {
	addToCart,
	addToWishlist,
	removeFromWishlist
})(ProductCarousel)
