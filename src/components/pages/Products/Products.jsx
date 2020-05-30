import React from 'react'
import PropTypes from 'prop-types'

import FilterPanel from './FilterPanel'
import ProductsContainer from './ProductsContainer/ProductsContainer'
import { Container } from './Products.styles'
import { PageContainer } from 'index.styles'

const Products = ({ products }) => {
  return (
    <PageContainer>
      <Container>
        <FilterPanel />
        <ProductsContainer products={products} />
      </Container>
    </PageContainer>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}



export default Products
