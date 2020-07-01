import ProductReviews from './ProductReviews'
import { connect } from 'react-redux'

import { getProductReviews } from 'redux/user'

export default connect(null, { getProductReviews })(ProductReviews)
