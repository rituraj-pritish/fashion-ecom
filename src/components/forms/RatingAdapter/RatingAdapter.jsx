import React from 'react'
import PropTypes from 'prop-types'
import Rating from 'react-rating'

import { ReactComponent as StarOutlineIcon } from 'assets/icons/star-outline.svg'
import StarIcon from 'assets/icons/StarIcon'
import Icon from 'atoms/Icon'
import theme from 'theme'
import Text from 'atoms/Text'
import { RatingAdapterWrapper } from './RatingAdapter.styled'

const RatingAdapter = ({ input, label, initialRating }) => {
  return (
    <RatingAdapterWrapper>
      <Text fontWeight={500} mb='0.5rem'>
        {label}
      </Text>
      <Rating
        initialRating={initialRating}
        emptySymbol={
          <Icon mr='0.3rem' color={theme.colors.golden}>
            <StarOutlineIcon />
          </Icon>
        }
        fullSymbol={
          <Icon color={theme.colors.golden} mr='0.3rem'>
            <StarIcon />
          </Icon>
        }
        onChange={input.onChange}
      />
    </RatingAdapterWrapper>
  )
}

RatingAdapter.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  initialRating: PropTypes.number
}

export default RatingAdapter
