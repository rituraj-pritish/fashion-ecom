import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import {
  Heading,
  Review,
  ReviewWrapper,
  BottomSection
} from './ReviewItem.styled'

const ReviewItem = ({
  author,
  date,
  anonymous = false,
  heading,
  review,
  id
}) => {
  return (
    <ReviewWrapper>
      <Heading>{heading}</Heading>
      <Review>{review}</Review>
      <BottomSection>
        <div>- {anonymous ? 'Anonymous' : author}</div>
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
