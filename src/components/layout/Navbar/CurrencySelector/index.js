import CurrencySelector from './CurrencySelector'
import { connect } from 'react-redux'

import { changeCurrency } from 'redux/currency'

const mapStateToProps = (state) => ({
  currencyCode: state.currency.currency.code  
})

export default connect(mapStateToProps, { changeCurrency })(CurrencySelector)
