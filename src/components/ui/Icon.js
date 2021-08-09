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
    height: ${({ size }) => size};

    path {
      fill: ${({ color }) => color ? color : 'grey'};
    }
  }

  &:hover {
    svg {
      path {
        fill: unset;
      }
    } 
      
  }

  ${typography} ${color} ${space} ${position} ${layout} ${grid} ${flexbox} ${border}
`

const Icon = ({ children, size = '22px', ...otherProps }) => {
  return (
    <StyledIcon size={size} {...otherProps}>
      {children}
    </StyledIcon>
  )
}

export default Icon
