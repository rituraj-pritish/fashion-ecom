import React from 'react'

import { PageContainer } from 'index.styles'
import ProductsContainer from 'components/pages/Products/ProductsContainer'
import FilterPanel from 'components/pages/Products/FilterPanel'
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
