import React from 'react'
import { connect } from 'react-redux'

import ProductItem from '../product-item/ProductItem'
import { Container } from './ProductsContainer.styles'

const ProductsContainer = ({ products }) => {
  return (
    <Container>
      {products.length &&
        products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
    </Container>
  )
}

const mapStateToProps = state => ({
  filtered: state.user.filtered,
  filtering: state.user.filtering,
  searching: state.user.searching,
  loading: state.user.loading
})

export default connect(mapStateToProps)(ProductsContainer)
