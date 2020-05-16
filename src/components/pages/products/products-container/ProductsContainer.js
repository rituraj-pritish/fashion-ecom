import React from 'react'
import { connect } from 'react-redux'

import ProductItem from '../product-item/ProductItem'
import Text from 'components/common/Text'
import { Container } from './ProductsContainer.styles'

const ProductsContainer = ({ products }) => {
  if (!products.length) return <Text>No results found</Text>
  return (
    <Container>
      {products.map(product => (
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
