import React from 'react'
import PropTypes from 'prop-types'

import { Heading, Review, ReviewWrapper, Author } from './ReviewItem.styled'

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
      <Author>- {anonymous ? 'Anonymous' : author}</Author>
    </ReviewWrapper>
  )
}

ReviewItem.propTypes = {
  anonymous: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
}

export default ReviewItem
