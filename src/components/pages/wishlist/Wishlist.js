import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PageContainer } from '../../../index.styles';
import CartItem from '../cart/cart-item/CartItem';
import { Container } from './Wishlist.styles';
import Text from '../../common/Text';
import Button from '../../common/Button';
import { Link } from 'react-router-dom';

const Wishlist = ({ wishlist }) => {
  return (
    <PageContainer>
      {wishlist.length === 0 && (
        <>
          <Text m='2rem 0'>Your wishlist is empty</Text>
          <Button maxWidth='200px' m='0 auto'>
            <Link to='/'>Continue Shopping</Link>
          </Button>
        </>
      )}
      <Container>
        {wishlist.map(item => (
          <CartItem item={item} page='wishlist' />
        ))}
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  wishlist: state.user.wishlist
});

export default connect(mapStateToProps)(Wishlist);

Wishlist.propTypes = {
  wishlist: PropTypes.array.isRequired
};
