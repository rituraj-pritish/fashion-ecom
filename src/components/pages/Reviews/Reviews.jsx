import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import Rating from 'react-rating'
import theme from 'theme'

import { PageContainer } from 'index.styles'
import { ReactComponent as StarOutlineIcon } from 'assets/icons/star-outline.svg'
import StarIcon from 'assets/icons/StarIcon'
import Icon from 'components/ui/Icon'
import ReviewItem from 'components/shared/ReviewItem'
import { SpinnerWrapper, AvgRating } from './Reviews.styled'
import Spinner from 'components/shared/Spinner/Spinner'

const Reviews = ({ getProductReviews, productId, avgRating, totalRatings }) => {
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

  if (isFetching)
    return (
      <PageContainer>
        <SpinnerWrapper>
          <Spinner size={35} />
        </SpinnerWrapper>
      </PageContainer>
    )

  return (
    <PageContainer align='left'>
      <AvgRating>
        <Rating
          initialRating={4.3}
          emptySymbol={
            <Icon noPointer mr='0.3rem' width='18px' color={theme.colors.golden}>
              <StarOutlineIcon />
            </Icon>
          }
          fullSymbol={
            <Icon noPointer width='18px' color={theme.colors.golden} mr='0.3rem'>
              <StarIcon />
            </Icon>
          }
          readonly
        />
        {avgRating} out of 5
      </AvgRating>
      <div>{totalRatings} Total ratings</div>

      {reviews.map(review => (
        <ReviewItem {...review} />
      ))}
    </PageContainer>
  )
}

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
  avgRating: PropTypes.number.isRequired,
  totalRatings: PropTypes.number.isRequired
}

export default Reviews
