import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import ReviewItem from 'components/shared/ReviewItem'
import { Link } from 'react-router-dom'

const ProductReviews = ({ productId, getProductReviews, page }) => {
  const [reviews, setReviews] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  console.log('re', reviews.length)
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

  if (page === 'product') {
    return (
      <div>
        {reviews.splice(0, 2).map(review => (
          <ReviewItem {...review} />
        ))}
        {/* {reviews.length > 0 && ( */}
          <Link to={`/reviews/${productId}`} >{`View all ${reviews.length} reviews`}</Link>
        {/* )} */}
      </div>
    )
  }

  return (
    <div>
      {reviews.map(review => (
        <ReviewItem {...review} />
      ))}
    </div>
  )
}

ProductReviews.propTypes = {
  productId: PropTypes.string.isRequired,
  getProductReviews: PropTypes.func.isRequired
}

export default ProductReviews
