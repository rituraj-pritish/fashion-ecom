import { connect } from 'react-redux'

import { emptyCart } from 'redux/cart'
import PaymentPage from './PaymentPage'

const mapStateToProps = ({ currency, cart }) => ({
  currency: currency.currency,
  cart: cart.items
})

export default connect(mapStateToProps, { emptyCart })(PaymentPage)
