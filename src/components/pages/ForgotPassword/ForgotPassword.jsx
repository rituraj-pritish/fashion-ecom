import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FORM_ERROR } from 'final-form'

import { PageContainer } from 'index.styles'
import { StyledLogo, Container } from './ForgotPassword.styled'
import { Field, Form } from 'react-final-form'
import TextFieldAdapter from 'components/shared/forms/TextFieldAdapter'
import { Error } from 'components/shared/forms/Form.styled'
import Button from 'components/ui/Button'
import { Link, Redirect } from 'react-router-dom'
import Logo from 'assets/Logo'
import Text from 'components/ui/Text'

const ForgotPassword = ({ isAuthenticated, resetPassword }) => {
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
                  </>
                )}

                {!showForm && (
                  <>
                    <Text color='green' mb='1.5rem'>
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
