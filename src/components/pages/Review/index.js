import Review from './Review'
import { connect } from 'react-redux'

import { addReview } from 'redux/user'

const mapStateToProps = (
  { products, user: { isLoading } },
  {
    match: {
      params: { productId, orderId }
    }
  }
) => ({
  products: products.allProducts,
  isLoading,
  orderId,
  productId
})

export default connect(mapStateToProps, { addReview })(Review)
