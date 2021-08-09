import CurrencySelector from './CurrencySelector'
import { connect } from 'react-redux'

import { changeCurrency } from 'redux/currency'

const mapStateToProps = ({currency}) => ({
  currencyCode: currency.currency.code,
  hasError: currency.error
})

export default connect(mapStateToProps, { changeCurrency })(CurrencySelector)
