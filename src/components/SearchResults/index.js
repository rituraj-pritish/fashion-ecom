import SearchResults from './SearchResults'
import { connect } from 'react-redux'

import searchProducts from 'helpers/searchProducts'

const mapStateToProps = ({ products: prod }, { match }) => {
  const { allProducts } = prod
  const searchQuery = match.params.searchQuery
  const products = searchProducts(allProducts, searchQuery)
  return {
    products
  }
}

export default connect(mapStateToProps)(SearchResults)
