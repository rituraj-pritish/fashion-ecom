import { connect } from 'react-redux'

import Wishlist from './Wishlist'

const mapStateToProps = state => ({
	wishlist: state.wishlist.items
})

export default connect(mapStateToProps)(Wishlist)