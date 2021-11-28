import { connect } from 'react-redux'

import Cart from './Cart'

const mapStateToProps = ({ cart }) => ({
	cart: cart.items.slice().sort((a, b) => new Date(b.date) - new Date(a.date)),
	forLater: cart.forLater
})

export default connect(mapStateToProps)(Cart)
