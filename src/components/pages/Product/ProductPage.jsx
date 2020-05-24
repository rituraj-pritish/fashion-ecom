import React from 'react'
import PropTypes from 'prop-types'

import ProductOverview from './ProductOverview'
import ProductCarousel from 'components/ProductCarousel'
import { PageContainer } from 'index.styles'

const ProductPage = ({
  product,
  products
}) => {
  return (
    <PageContainer>
      <ProductOverview product={product} />

      <ProductCarousel title='Similar Products' data={products} />
    </PageContainer>
  )
}

ProductPage.propTypes = {
  product: PropTypes.object
}

export default ProductPage
