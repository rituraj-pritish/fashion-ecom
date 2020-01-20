import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import logo from '../../../assets/logo.svg';
import { PageContainer } from '../../../index.styles';
import { Logo, Container } from './SignUp.styles';
import { signup } from '../../../redux/actions/authActions';
import { setAlert } from '../../../redux/actions/userActions';
import Input from '../../reusable-components/Input';
import Button from '../../reusable-components/Button';

const SignUp = ({ signup, firebase, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password1: '',
    password2: ''
  });

  if (firebase.auth.uid) return <Redirect to='/' />;

  const { name, email, password1, password2, phone } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (email === '' || name === '' || password1 === '' || password2 === '') {
      setAlert('All fields are required', 'danger');
      return;
    } else if (password1 !== password2) {
      setAlert('Passwords do not match', 'danger');
      return;
    } else if (password1.length < 6) {
      setAlert('Password must be at least six characters long', 'danger');
      return;
    }
    signup({ ...formData, password: password1 });
  };

  return (
    <PageContainer>
      <Container>
        <Link to='/'>
          <Logo src={logo} alt={logo} />
        </Link>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <Input type='text' name='name' value={name} onChange={handleChange} />

          <label htmlFor='phone'>Phone (optional)</label>
          <Input
            type='number'
            name='phone'
            value={phone}
            onChange={handleChange}
          />

          <label htmlFor='email'>Email</label>
          <Input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />

          <label htmlFor='password1'>Password</label>
          <Input
            type='password'
            name='password1'
            value={password1}
            onChange={handleChange}
          />

          <label htmlFor='password2'>Confirm Password</label>
          <Input
            type='password'
            name='password2'
            value={password2}
            onChange={handleChange}
          />

          <Button>Sign Up</Button>
          <p>
            Already have an account ? <Link to='/signin'>Sign In</Link>
          </p>
        </form>
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  firebase: state.firebase
});

export default connect(mapStateToProps, { signup, setAlert })(SignUp);
