import PriceSlider from './PriceSlider'
import { connect } from 'react-redux'
import { setFilterCriteria } from 'redux/products'

const mapStateToProps = ({ currency }) => ({
  currency: currency.currency
})

export default connect(mapStateToProps, { setFilterCriteria })(PriceSlider)
