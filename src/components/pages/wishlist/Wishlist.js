import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { PageContainer } from '../../../index.styles';
import CartItem from '../cart/cart-item/CartItem';
import { Container } from './Wishlist.styles';

const Wishlist = ({ wishlist }) => {
  return (
    <PageContainer>
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
