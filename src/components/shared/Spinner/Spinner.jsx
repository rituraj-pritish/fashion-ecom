import React from 'react'
import PropTypes from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'

import theme from 'theme'

const Spinner = ({color, size}) => {
  return (
    <ClipLoader
      size={size || 20}
      color={color || theme.colors.primary}
    />
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
}

export default Spinner
