import React, { useRef } from 'react';

import {
  UserOptions,
  NoAuthOptions,
  AuthOptions
} from './NavUserOptions.styles';
import { Link } from 'react-router-dom';
import { signOut } from '../../../redux/actions/authActions';
import { connect } from 'react-redux';
import clickOutside from '../../../helpers/clickOutside';
import SignOutIcon from '../../../assets/icons/SignOutIcon';
import HeartIcon from '../../../assets/icons/HeartIcon';
import CartIcon from '../../../assets/icons/CartIcon';
import Button from '../../common/Button';
import Icon from '../../common/Icon';

const NavUserOptions = ({ show, setShow, signOut, auth, userRef }) => {
  const node = useRef();

  clickOutside(node, () => setShow(false), userRef);

  const noAuthOptions = (
    <NoAuthOptions>
      <Link to='/signin'>
        <Button>Sign In</Button>
      </Link>
      <div>
        <p>New Customer ?</p>
        <Link to='/signup'>
          <Button variant='secondary'>Sign up</Button>
        </Link>
      </div>
    </NoAuthOptions>
  );

  const authOptions = (
    <AuthOptions>
      <ul>
        <li>
          <Link to='/user/wishlist'>
            <Icon>
              <HeartIcon />
            </Icon>
            Wishlist
          </Link>
        </li>
        <li>
          <Link to='/user/cart'>
            <Icon>
              <CartIcon />
            </Icon>
            Cart
          </Link>
        </li>
        <li>
          <Link to='#' onClick={() => signOut()}>
            <Icon>
              <SignOutIcon />
            </Icon>
            Sign Out
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
