import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { PageContainer } from 'index.styles'
import { StyledLogo, Container } from './ForgotPassword.styled'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import { Error } from 'components/shared/forms/Form.styled'
import Button from 'components/ui/Button'
import { Link, Redirect } from 'react-router-dom'
import Logo from 'assets/Logo'
import Text from 'components/ui/Text'
import useAuthentication from 'hooks/useAuthentication'

const ForgotPassword = () => {
	const { isAuthenticated, resetPassword } = useAuthentication()
	const [showForm, setShowForm] = useState(true)

	useEffect(
		() => () => {
			setShowForm(true)
		},
		[]
	)

	if (isAuthenticated) return <Redirect to='/' />

	return (
		<PageContainer>
			<Container>
				<StyledLogo>
					<Link to='/'>
						<Logo />
					</Link>
				</StyledLogo>
				<Form
					onSubmit={resetPassword}
					render={({
						handleSubmit,
						submitError,
						dirtySinceLastSubmit,
						submitting,
						submitSucceeded
					}) => {
						if (submitSucceeded) setShowForm(false)

						return (
							<form onSubmit={handleSubmit}>
								{showForm && (
									<>
										<Field
											name='email'
											label='Email'
											isRequired
											validate={val => !val && 'Required'}
											component={TextFieldAdapter}
										/>
										<Button isLoading={submitting}>
                      Send reset password link
										</Button>
										<Error>
											{!!submitError && !dirtySinceLastSubmit && submitError}
										</Error>
										<Text color='blue' mt='2rem'>
											<Link to='/signin'>Go back to sign in</Link>
										</Text>
									</>
								)}

								{!showForm && (
									<>
										<Text color='green' mb='1.5rem' fontSize='1.8rem'>
                      Reset link is sent to the email
										</Text>
										<Link to='/signin'>
											<Text display='inline' color='blue'>
                        Sign In
											</Text>
										</Link>
									</>
								)}
							</form>
						)
					}}
				/>
			</Container>
		</PageContainer>
	)
}

ForgotPassword.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	resetPassword: PropTypes.func.isRequired,
	linkSent: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired
}

export default ForgotPassword
