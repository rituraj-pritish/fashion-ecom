import React, { useRef } from 'react';

import { UserOptions, NoAuthOptions, AuthOptions } from './NavUserOptions.styles';
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

  const authOptions = (
    <AuthOptions>
      <ul>
        <li>
          <Link to='/user/wishlist'>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to='#' onClick={() => signOut()}>
            Logout
          </Link>
        </li>
      </ul>
    </AuthOptions>
  );

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
