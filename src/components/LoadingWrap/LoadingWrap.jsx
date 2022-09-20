import React from 'react'
import PropTypes from 'prop-types'
import MoonLoader from 'react-spinners/MoonLoader'

import { Loader, Container } from './LoadingWrap.styled'

const LoadingWrap = ({ isLoading, spinnerSize = 35, children }) => {
  if (!isLoading) return children

  return (
    <Container>
      <Loader>
        <MoonLoader size={spinnerSize} />
      </Loader>
      {children}
    </Container>
  )
}

LoadingWrap.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  spinnerSize: PropTypes.number
}

export default LoadingWrap
