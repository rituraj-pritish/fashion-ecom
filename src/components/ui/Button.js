import React from 'react'
import styled from 'styled-components'
import {
  typography,
  space,
  color,
  variant,
  position,
  flexbox,
  layout,
  grid,
  border
} from 'styled-system'
import ClipLoader from 'react-spinners/ClipLoader'

import theme from 'theme'

const StyledButton = styled.button`
width: 100%;
border: none;
cursor: pointer;
padding: 0.5rem 1rem;
font-size: 1.6rem;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;

${variant({
  variants: {
    primary: {
      color: theme.colors.white,
      bg: theme.colors.primary,
      '&:hover': {
        bg: theme.colors.primaryDark
      }
    },
    secondary: {
      color: theme.colors.primary,
      bg: theme.colors.white,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: theme.colors.primary,
      p: '0.4rem 1rem'
    }
  }
})}
${typography} ${color} ${space} ${position} ${layout} ${grid} ${flexbox} ${border}
`

const Button = ({ children, variant, isLoading, ...otherProps }) => {
  return (
    <StyledButton variant={variant} {...otherProps}>
      {isLoading ? (
        <ClipLoader
          size={17}
          color={
            variant === 'primary' ? theme.colors.white : theme.colors.primary
          }
        />
      ) : (
        children
      )}
    </StyledButton>
  )
}

Button.defaultProps = {
  variant: 'primary',
  height: '35px'
}

export default Button
