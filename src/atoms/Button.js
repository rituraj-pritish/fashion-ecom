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
	border,
} from 'styled-system'
import ClipLoader from 'react-spinners/ClipLoader'

import theme from 'theme'
import { lighten } from 'polished'

const StyledButton = styled.button`
	width: 100%;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	font-weight: bold;
	font-size: 1.6rem;
	border-radius: ${theme.borderRadius};
	display: flex;
	justify-content: center;
	align-items: center;

	${variant({
		variants: {
			primary: {
				color: theme.colors.white,
				bg: theme.colors.primary,
				'&:hover': {
					bg: theme.colors.primaryDark,
				},
			},
			secondary: {
				color: theme.colors.primary,
				bg: theme.colors.white,
				borderWidth: '2px',
				borderStyle: 'solid',
				borderColor: theme.colors.primary,
				p: '0.4rem 1rem',
			},
			cancel: {
				bg: lighten(0.2, theme.colors.grey),
				color: theme.colors.white,
			},
		},
	})}

	${({ disabled, variant }) =>
		disabled &&
		variant === 'primary' &&
		`
  opacity: 0.8;
  pointer-events: none;
`}

${({ disabled, variant }) =>
		disabled &&
		variant === 'secondary' &&
		`
  cursor: default;
  opacity: 0.5;
`}

${typography} ${color} ${space} ${position} ${layout} ${grid} ${flexbox} ${border}
`

const Button = ({ children, variant, isLoading, disabled, ...otherProps }) => {
	return (
		<StyledButton variant={variant} disabled={disabled} {...otherProps}>
			{isLoading ? (
				<ClipLoader
					size={17}
					color={variant === 'primary' ? theme.colors.white : theme.colors.primary}
				/>
			) : (
				children
			)}
		</StyledButton>
	)
}

Button.defaultProps = {
	variant: 'primary',
	height: '35px',
}

export default Button
