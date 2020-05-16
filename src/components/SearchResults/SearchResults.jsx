import React from 'react'

import { PageContainer } from 'index.styles'
import ProductsContainer from 'components/pages/products/products-container/ProductsContainer'
import Text from 'components/common/Text'

const SearchResults = ({ products }) => {
  return (
    <PageContainer>
      {!products.length ? (
        <Text>No results found</Text>
      ) : (
        <ProductsContainer products={products} />
      )}
    </PageContainer>
  )
}

export default SearchResults
