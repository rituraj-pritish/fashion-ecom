import { connect } from 'react-redux'

import ProductPage from './ProductPage'

const mapStateToProps = ({ products: { allProducts } }, { match }) => {
  const { productId } = match.params
  const product = allProducts.find(product => product.id === productId)

  return {
    product,
    products: allProducts
  }
}

export default connect(mapStateToProps)(ProductPage)

