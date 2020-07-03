import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'react-rating'

import { ReactComponent as StarOutlineIcon } from 'assets/icons/star-outline.svg'
import StarIcon from 'assets/icons/StarIcon'
import Icon from 'components/ui/Icon'
import theme from 'theme'

const StarRating = ({ readOnly, initialRating, iconSize, spaceBetweenIcons }) => {
  return (
    <Rating
      initialRating={initialRating}
      emptySymbol={
        <Icon size={iconSize} noPointer={readOnly} mr={spaceBetweenIcons} color={theme.colors.golden}>
          <StarOutlineIcon />
        </Icon>
      }
      fullSymbol={
        <Icon size={iconSize} noPointer={readOnly} color={theme.colors.golden} mr={spaceBetweenIcons}>
          <StarIcon />
        </Icon>
      }
      readonly={readOnly}
    />
  )
}

StarRating.propTypes = {
  readOnly: PropTypes.bool,
  iconSize: PropTypes.string,
  spaceBetweenIcons: PropTypes.string,
  initialRating: PropTypes.number
}

export default StarRating
