import React, { useRef } from 'react';

import { UserOptions, NoAuthOptions } from './NavUserOptions.styles';
import { Link } from 'react-router-dom';
import { signOut } from '../../../redux/actions/authActions';
import { connect } from 'react-redux';
import clickOutside from '../../../helpers/clickOutside';

const NavUserOptions = ({ show, setShow, signOut, auth }) => {
  const node = useRef();

  clickOutside(node, () => setShow(false));

  const noAuthOptions = (
    <NoAuthOptions>
      <Link to='/signin'>
        <button>Sign In</button>
      </Link>
      <div>
        <p>New Customer ?</p>
        <Link to='/signup'>
          <button>Sign up</button>
        </Link>
      </div>
    </NoAuthOptions>
  );

  const authOptions = <button onClick={signOut}>logout</button>;

  return (
    <UserOptions ref={node} show={show}>
      {auth.uid ? authOptions : noAuthOptions}
    </UserOptions>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps, { signOut })(NavUserOptions);
