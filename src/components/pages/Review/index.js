import Review from './Review'
import { connect } from 'react-redux'

import { addReview } from 'redux/user'

const mapStateToProps = (
  { user: { isLoading } },
  {
    match: {
      params: { productId, orderId }
    }
  }
) => ({
  isLoading,
  orderId,
  productId
})

export default connect(mapStateToProps, { addReview })(Review)
