import Review from './Review'
import { connect } from 'react-redux'

import { addReview, getReview } from 'redux/user'

const mapStateToProps = (
	{ products, user: { addingReview: isAddingReview } },
	{
		match: {
			params: { productId, orderId }
		}
	}
) => ({
	products: products.allProducts,
	isAddingReview,
	orderId,
	productId
})

export default connect(mapStateToProps, { addReview, getReview })(Review)
