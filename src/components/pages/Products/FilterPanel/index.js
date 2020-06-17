import FilterPanel from './FilterPanel'
import { connect } from 'react-redux'

import { setOverlay } from 'redux/overlay'
import { setFilterCriteria } from 'redux/products'

const mapStateToProps = ({ products: { allProducts } }) => {
  const brands = [
    ...new Set(allProducts.map(product => product.brand.toUpperCase()))
  ]
  return {
    brands
  }
}

export default connect(mapStateToProps, { setFilterCriteria, setOverlay })(
  FilterPanel
)
