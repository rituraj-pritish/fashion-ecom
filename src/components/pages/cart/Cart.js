import React from 'react';

import { PageContainer } from '../../../index.styles';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
  return (
    <PageContainer>
      {cart.map(item => (
        <>
          <h2>{item.product.name}</h2>
          <p>{item.qty}</p>
          <p>{item.product.variants[item.variant].price * item.qty}</p>
        </>
      ))}
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart
});

export default connect(mapStateToProps)(Cart);
