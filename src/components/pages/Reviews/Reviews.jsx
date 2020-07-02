import React, { useState, useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import Rating from 'react-rating'
import theme from 'theme'

import { PageContainer } from 'index.styles'
import { ReactComponent as StarOutlineIcon } from 'assets/icons/star-outline.svg'
import StarIcon from 'assets/icons/StarIcon'
import Icon from 'components/ui/Icon'
import ReviewItem from 'components/shared/ReviewItem'
import { SpinnerWrapper, AvgRating, Image, TopSection } from './Reviews.styled'
import Spinner from 'components/shared/Spinner/Spinner'

const Reviews = ({ getProductReviews, productId, product }) => {
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

  const { avg_rating, total_ratings, total_reviews, name, variants } = product
  const { images } = variants[Object.keys(variants)[0]]

  return (
    <PageContainer align='left'>
      <TopSection>
        <Image src={images[0]} alt='name' />
        <div>
          <div>{name}</div>

          <AvgRating>
            <Rating
              initialRating={4.3}
              emptySymbol={
                <Icon
                  noPointer
                  mr='0.3rem'
                  width='18px'
                  color={theme.colors.golden}
                >
                  <StarOutlineIcon />
                </Icon>
              }
              fullSymbol={
                <Icon
                  noPointer
                  width='18px'
                  color={theme.colors.golden}
                  mr='0.3rem'
                >
                  <StarIcon />
                </Icon>
              }
              readonly
            />
            <div>{avg_rating} out of 5</div>
          </AvgRating>

          <div>
            <span>{total_ratings}</span>
            ratings  &  <span>{total_reviews}</span>
            reviews
          </div>
        </div>
      </TopSection>

      {reviews.map(review => (
        <ReviewItem {...review} />
      ))}
    </PageContainer>
  )
}

Reviews.propTypes = {
  productId: PropTypes.string.isRequired,
  product: PropTypes.object.isRequired
}

export default Reviews
