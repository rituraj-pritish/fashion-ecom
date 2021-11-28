import { connect } from 'react-redux'

import { addToCart } from 'redux/cart'
import { addToWishlist } from 'redux/wishlist'
import ProductItem from './ProductItem'

const mapStateToProps = ({ cart, wishlist }) => ({
	isLoading: cart.isLoading,
	inFocus: cart.inFocus,
	cart: cart.items,
	wishlist: wishlist.items,
})

export default connect(mapStateToProps, { addToCart, addToWishlist })(
	ProductItem
)
