import React from 'react'
import { darken, lighten } from 'polished'
import styled from 'styled-components'
import {
	space,
	typography,
	color,
	layout,
	grid,
	flexbox,
	border
} from 'styled-system'
import theme from 'theme'

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.6rem;
  background: #eee;
  margin-bottom: 20px;
  height: 35px;
  border: 1px solid ${darken(0.1, theme.colors.lightGrey)};
  ${({ readOnly }) =>
		readOnly &&
    `
    opacity: 0.5;
    pointer-events: none;
  `};

  &:focus {
    border: none;
    box-shadow: 0px 0px 0px 1px ${lighten(0.1, theme.colors.primary)};
  }

  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${space} ${typography} ${color} ${layout} ${grid} ${flexbox} ${border}
`

const Input = props => {
	return <StyledInput {...props} />
}

export default Input
