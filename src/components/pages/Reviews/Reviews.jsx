import React from 'react'
import PropTypes from 'prop-types'
import { PageContainer } from 'index.styles'
import ProductReviews from '../Product/ProductReviews'

const Reviews = ({ match }) => {
  const { productId } = match.params
  return (
    <PageContainer>
      <ProductReviews productId={productId} />
    </PageContainer>
  )
}

Reviews.propTypes = {}

export default Reviews
