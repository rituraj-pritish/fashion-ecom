import React from 'react';

import { UserOptions, NoAuthOptions } from './NavUserOptions.styles';
import { Link } from 'react-router-dom';
import { signOut } from '../../../redux/actions/authActions';
import { connect } from 'react-redux';

const NavUserOptions = ({ show, setShow, signOut, auth }) => {
  const noAuthOptions = (
    <NoAuthOptions>
      <Link to='signin'>
        <button>Sign In</button>
      </Link>
      <div>
        <p>New Customer ?</p>
        <Link to='signup'>
          <button>Sign up</button>
        </Link>
      </div>
    </NoAuthOptions>
  );

  const authOptions = <button onClick={signOut}>logout</button>;

  return (
    <UserOptions show={show}>
      {auth.uid ? authOptions : noAuthOptions}
    </UserOptions>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { signOut })(NavUserOptions);
