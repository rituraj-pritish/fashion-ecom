import React from 'react'
import PropTypes from 'prop-types'

const ReviewItem = ({author, anonymous, heading, review, id}) => {
  return (
    <div>
      {review}
    </div>
  )
}

ReviewItem.propTypes = {
  anonymous: PropTypes.bool.isRequired,
  author: PropTypes.string.isRequired,
}

export default ReviewItem
