import React, { useState } from 'react';

import { Link, Redirect } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import { PageContainer } from '../../../index.styles';
import { Logo, Container } from './SignIn.styles';
import { connect } from 'react-redux';
import { signin } from '../../../redux/actions/authActions';

const SignIn = ({ firebase, signin, history }) => {
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

    //todo form validation
    signin({ email, password });
  };

  return (
    <PageContainer>
      <Container>
        <Link to='/'>
          <Logo src={logo} alt={logo} />
        </Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />

          <button>Sign In</button>
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

export default connect(mapStateToProps, { signin })(SignIn);
