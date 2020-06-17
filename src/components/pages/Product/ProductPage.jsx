import React from 'react'
import PropTypes from 'prop-types'

import ProductOverview from './ProductOverview'
import ProductCarousel from 'components/shared/ProductCarousel'
import { PageContainer } from 'index.styles'

const ProductPage = ({
  product,
  products
}) => {
  return (
    <PageContainer>
      <ProductOverview product={product} />

      <ProductCarousel title='Similar Products' data={products} excludeProduct={product.id} />
    </PageContainer>
  )
}

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    variants: PropTypes.object.isRequired,
  }).isRequired,
  products: PropTypes.array.isRequired
}

export default ProductPage
