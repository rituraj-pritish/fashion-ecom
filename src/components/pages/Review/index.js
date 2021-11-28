import Review from './Review'
import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(Review)
