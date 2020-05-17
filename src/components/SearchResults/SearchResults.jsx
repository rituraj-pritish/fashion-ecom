import React from 'react'

import { PageContainer } from 'index.styles'
import ProductsContainer from 'components/pages/products/products-container/ProductsContainer'
import FilterPanel from 'components/pages/products/FilterPanel'
import { Container } from './SearchResults.styled'

const SearchResults = ({ products }) => {
  return (
    <PageContainer>
      <Container>
        <FilterPanel />
        <ProductsContainer products={products} />
      </Container>
    </PageContainer>
  )
}

export default SearchResults
