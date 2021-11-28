import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import CheckoutBox from './CheckoutBox'

const mapStateToProps = ({ auth: { isAuthenticated }, currency }) => ({
	isAuthenticated,
	currency: currency.currency
})

export default withRouter(connect(mapStateToProps)(CheckoutBox))
