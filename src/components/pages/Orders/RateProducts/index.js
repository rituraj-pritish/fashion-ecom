import RateProducts from './RateProducts'
import { connect } from 'react-redux'

import { rateProduct } from 'redux/user'

const mapStateToProps = ({user}) => ({
  isRating: user.isRating  
})

export default connect(mapStateToProps, { rateProduct })(RateProducts)
