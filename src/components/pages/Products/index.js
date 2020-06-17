import { connect } from 'react-redux'

import filter from 'helpers/filter'
import Products from './Products'

const mapStateToProps = ({ products: prod }, { match }) => {
  const { productsCategory: category } = match.params
  const { allProducts, filterCriteria } = prod

  let products = []
  products = allProducts.filter(product => product.category === category)
  if (!products.length) products = allProducts

  products = filter(products, filterCriteria)

  return {
    products
  }
}

export default connect(mapStateToProps)(Products)