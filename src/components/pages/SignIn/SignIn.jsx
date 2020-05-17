import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Logo from 'assets/Logo'
import { signin } from 'redux/auth'
import { setAlert } from 'redux/actions/userActions'
import Input from 'components/ui/Input'
import Button from 'components/ui/Button'
import Text from 'components/ui/Text'
import { PageContainer } from 'index.styles'
import { StyledLogo, Container } from './SignIn.styles'

const SignIn = ({ isAuthenticated, isLoading, signin, setAlert }) => {
  const [formData, setFormData] = useState({
    email: 'demo@demo.com',
    password: '123123'
  })

  if (isAuthenticated) return <Redirect to='/' />

  const { email, password } = formData

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (email === '' || password === '') {
      setAlert('All fields are required', 'danger')
      return
    }
    signin({ email, password })
  }

  return (
    <PageContainer>
      <Container>
        <StyledLogo>
          <Link to='/'>
            <Logo />
          </Link>
        </StyledLogo>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <Input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />

          <label htmlFor='password'>Password</label>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
          {/* TODO {!firebase.auth.isLoaded && 'loding'} */}
          <Button isLoading={isLoading}>Sign In</Button>
          <Text mt='2rem'>
            Don't have an account ?
            <Link to='/signup'>
              <Text display='inline' color='blue'>
                {' '}
                Sign Up
              </Text>
            </Link>
          </Text>
        </form>
      </Container>
    </PageContainer>
  )
}

const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.isAuthenticated,
  isLoading: auth.isLoading
})

export default connect(mapStateToProps, { signin, setAlert })(SignIn)
