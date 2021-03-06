import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'

import ReviewItem from 'components/shared/ReviewItem'
import {
  ReviewsWrapper,
  StyledLink,
  SpinnerWrapper,
  NoReviews
} from './ProductReviews.styled'
import Spinner from 'components/shared/Spinner'

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

  return (
    <ReviewsWrapper>
      <div>Customer Reviews</div>

      {isFetching ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : reviews.length === 0 ? (
        <NoReviews>No reviews yet</NoReviews>
      ) : (
        <>
          {reviews.slice(0, 2).map(review => (
            <ReviewItem {...review} />
          ))}
          {reviews.length > 2 && (
            <StyledLink
              to={`/reviews/${productId}`}
            >{`View all ${reviews.length} reviews`}</StyledLink>
          )}
        </>
      )}
    </ReviewsWrapper>
  )
}

ProductReviews.propTypes = {
  productId: PropTypes.string.isRequired,
  getProductReviews: PropTypes.func.isRequired
}

export default ProductReviews
