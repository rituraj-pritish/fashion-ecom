import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import ReviewItem from 'components/shared/ReviewItem'
import { Link } from 'react-router-dom'
import { ReviewsWrapper, StyledLink } from './ProductReviews.styled'

const ProductReviews = ({ productId, getProductReviews, page }) => {
  const [reviews, setReviews] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const getReviews = useCallback(async () => {
    const res = await getProductReviews(productId)
    setReviews(res)
    setIsFetching(false)
  }, [getProductReviews, productId])

  useEffect(() => {
    setIsFetching(true)
    getReviews()
  }, [getReviews, productId])

  if (isFetching) return 'loading'

  return (
    <ReviewsWrapper>
      {reviews.slice(0, 2).map(review => (
        <ReviewItem {...review} />
      ))}
      {reviews.length > 2 && (
        <StyledLink
          to={`/reviews/${productId}`}
        >{`View all ${reviews.length} reviews`}</StyledLink>
      )}
    </ReviewsWrapper>
  )
}

ProductReviews.propTypes = {
  productId: PropTypes.string.isRequired,
  getProductReviews: PropTypes.func.isRequired
}

export default ProductReviews
