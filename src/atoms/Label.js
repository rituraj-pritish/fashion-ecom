import React from 'react'
import styled from 'styled-components'
import {space, typography, color, layout,grid,flexbox} from 'styled-system'

const StyledLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 500;

  ${({isRequired}) => isRequired && `
    &::after {
      content: '*';
      color: red;
      margin-left: 0.5rem; 
    }
  `};

  ${space} ${typography} ${color} ${layout} ${grid} ${flexbox}
`

const Label = ({children, ...otherProps}) => {
	return (
		<StyledLabel {...otherProps} >
			{children}
		</StyledLabel>
	)
}

export default Label
