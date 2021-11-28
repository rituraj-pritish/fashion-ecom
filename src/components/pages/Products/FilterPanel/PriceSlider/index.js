import PriceSlider from './PriceSlider'
import { connect } from 'react-redux'

const mapStateToProps = ({ currency }) => ({
	currency: currency.currency
})

export default connect(mapStateToProps)(PriceSlider)
