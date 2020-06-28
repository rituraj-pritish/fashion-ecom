import React from 'react'
import styled from 'styled-components'
import {
  typography,
  space,
  color,
  position,
  flexbox,
  layout,
  grid,
  border
} from 'styled-system'

export const StyledIcon = styled.div`
    cursor: ${({ noPointer }) => (noPointer ? 'initial' : 'pointer')};
  svg {
    width: 100%;
    height: ${({ width }) => width};

    path {
      fill: ${({ color }) => color};
    }
  }
  ${typography} ${color} ${space} ${position} ${layout} ${grid} ${flexbox} ${border}
`

const Icon = ({ children, ...otherProps }) => {
  return <StyledIcon {...otherProps}>{children}</StyledIcon>
}

Icon.defaultProps = {
  width: '22px'
}

export default Icon
