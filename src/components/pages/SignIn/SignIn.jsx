import React from 'react'
import { Link, Redirect } from 'react-router-dom'

import Logo from 'assets/Logo'
import Button from 'components/ui/Button'
import Text from 'components/ui/Text'
import { PageContainer } from 'index.styles'
import { StyledLogo, Container } from './SignIn.styles'
import { Form, Field } from 'react-final-form'
import { Error } from 'components/shared/forms/Form.styled'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import useAuthentication from 'hooks/useAuthentication'

const INITIAL_VALUES = {
	email: 'demo@demo.com',
	password: '123123'
}

const SignIn = ({ history }) => {
	const { isAuthenticated, signin } = useAuthentication()

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
					onSubmit={(values) => signin(values, history.goBack)}
					initialValues={INITIAL_VALUES}
					render={({ handleSubmit, submitError, dirtySinceLastSubmit, submitting }) => {
						return (
							<form onSubmit={handleSubmit}>
								<Field
									name='email'
									label='Email'
									isRequired
									validate={val => !val && 'Required'}
									component={TextFieldAdapter}
								/>
								<Field
									name='password'
									label='Password'
									inputType='password'
									isRequired
									validate={val => !val && 'Required'}
									component={TextFieldAdapter}
								/>
								<Button isLoading={submitting}>Sign In</Button>

								<Error>
									{!!submitError && !dirtySinceLastSubmit && submitError}
								</Error>

								<Link to='/forgot-password'>
									<Text display='inline' color='blue'>
                    Forgot password 
									</Text>
								</Link>
							</form>
						)
					}}
				/>
				<Text mt='2rem'>
          Don&apos;t have an account ?
					<Link to='/signup'>
						<Text display='inline' color='blue'>
							{' '}
              Sign Up
						</Text>
					</Link>
				</Text>
			</Container>
		</PageContainer>
	)
}

export default SignIn
