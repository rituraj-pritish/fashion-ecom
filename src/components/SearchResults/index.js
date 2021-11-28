import SearchResults from './SearchResults'
import { connect } from 'react-redux'

import searchProducts from 'helpers/searchProducts'
import filter from 'helpers/filter'

const mapStateToProps = ({ products: prod }, { match }) => {
	const { allProducts, filterCriteria } = prod
	const searchQuery = match.params.searchQuery

	const products = filter(
		searchProducts(allProducts, searchQuery),
		filterCriteria
	)

	return {
		products
	}
}

export default connect(mapStateToProps)(SearchResults)
