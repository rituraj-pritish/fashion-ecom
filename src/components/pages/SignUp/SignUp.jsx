import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import Logo from 'assets/Logo'
import { signup } from 'redux/auth'
import setAlert from 'setAlert'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import Text from 'components/ui/Text'
import { PageContainer } from 'index.styles'
import { StyledLogo, Container } from './SignUp.styles'
import { Form, Field } from 'react-final-form'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import { emailValidator, passwordValidator } from 'helpers/validations'
import { Error } from 'components/shared/forms/Form.styled'

const SignUp = ({ signup, isAuthenticated, isLoading }) => {
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
          onSubmit={signup}
          render={({ handleSubmit, values, submitError, dirtySinceLastSubmit }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  name='name'
                  label='Name'
                  validate={val => !val && 'Required'}
                  isRequired
                  component={TextFieldAdapter}
                />
                <Field
                  name='email'
                  label='Email'
                  isRequired
                  validate={emailValidator}
                  component={TextFieldAdapter}
                />
                <Field
                  name='phone'
                  label='Phone'
                  component={TextFieldAdapter}
                />
                <Field
                  name='password'
                  label='Password'
                  isRequired
                  validate={passwordValidator}
                  component={TextFieldAdapter}
                />
                <Field
                  name='confirmPassword'
                  label='Confirm Password'
                  validate={val => {
                    if (!val) return 'Required'
                    if (val !== values.password)
                      return 'Does not match with password'
                  }}
                  isRequired
                  component={TextFieldAdapter}
                />
                <Button type='submit' isLoading={isLoading}>
                  Sign Up
                </Button>
                <Error>{(!!submitError && !dirtySinceLastSubmit ) && submitError}</Error>
              </form>
            )
          }}
        />

        <Text mt='2rem'>
          Already have an account ?
          <Link to='/signin'>
            <Text display='inline' color='blue'>
              {' '}
              Sign In
            </Text>
          </Link>
        </Text>
      </Container>
    </PageContainer>
  )
}

const mapStateToProps = ({ auth: { isAuthenticated, isLoading } }) => ({
  isAuthenticated,
  isLoading
})

export default connect(mapStateToProps, { signup })(SignUp)
