import React from 'react'

import ProductItem from '../ProductItem'
import Text from 'atoms/Text'
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

export default ProductsContainer
