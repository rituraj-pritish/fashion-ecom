import Reviews from './Reviews'
import { connect } from 'react-redux'

import { getProductReviews } from 'redux/user'

const mapStateToProps = (
  { products },
  {
    match: {
      params: { productId }
    }
  }
) => {
  const product = products.allProducts.find(({ id }) => id === productId)
  return {
    productId,
    product
  }
}

export default connect(mapStateToProps, { getProductReviews })(Reviews)
