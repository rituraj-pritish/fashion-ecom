import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import Logo from '../../../assets/Logo'
import { PageContainer } from '../../../index.styles';
import { StyledLogo, Container } from './SignIn.styles';
import { connect } from 'react-redux';
import { signin } from '../../../redux/actions/authActions';
import { setAlert } from '../../../redux/actions/userActions';
import Input from '../../reusable-components/Input';
import Button from '../../reusable-components/Button';

const SignIn = ({ firebase, signin, setAlert }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  if (firebase.auth.uid) return <Redirect to='/' />;

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      setAlert('All fields are required', 'danger');
      return;
    }
    signin({ email, password });
  };

  return (
    <PageContainer>
      <Container>
        <Link to='/'>
          <StyledLogo>
            <Logo/>
          </StyledLogo>
        </Link>
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

          <Button fullWidth>Sign In</Button>
          <p>
            Don't have an account ? <Link to='/signup'>Sign Up</Link>
          </p>
        </form>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  firebase: state.firebase
});

export default connect(mapStateToProps, { signin, setAlert })(SignIn);
