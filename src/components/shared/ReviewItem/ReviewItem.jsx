import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
  Heading,
  Review,
  ReviewWrapper,
  BottomSection
} from './ReviewItem.styled'
import StarRating from '../StarRating'

const ReviewItem = ({
  author,
  date,
  anonymous = false,
  heading,
  review,
  id,
  overall_rating
}) => {
  return (
    <ReviewWrapper>
      <Heading>
        {heading}{' '}
        <StarRating
          readOnly
          iconSize='1.4rem'
          spaceBetweenIcons='0.2rem'
          initialRating={overall_rating}
        />
      </Heading>
      <Review>{review}</Review>
      <BottomSection>
        <div>- {anonymous ? 'Fashion Buyer' : author},</div>
        <div>{moment(date).format('DD MMM YYYY')}</div>
      </BottomSection>
    </ReviewWrapper>
  )
}

ReviewItem.propTypes = {
  anonymous: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default ReviewItem
