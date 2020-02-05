import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Button from '../../../common/Button';
import { CheckoutBoxContainer, Container, Line } from './CheckoutBox.styles';

const CheckoutBox = ({ cart, history, auth }) => {
  let subTotal = cart
    .reduce(
      (total, { product, variant, qty }) =>
        total + product.variants[variant].price * qty,
      0
    )
    .toFixed(2);

  const handleCheckout = () => {
    if (auth.isEmpty) {
      history.push('/signin');
      return;
    }
    history.push('/user/checkout');
  };

  return (
    <CheckoutBoxContainer>
      <Container>
        Subtotal: <p>{subTotal}</p> <br />
        Shipping: <p>{subTotal > 200 ? 'FREE' : '$ 20'}</p>
        <Line />
        Total:{' '}
        <p>
          $ {subTotal > 200 ? subTotal : (parseFloat(subTotal) + 20).toFixed(2)}
        </p>
        <Button onClick={handleCheckout}>Proceed to buy</Button>
      </Container>
    </CheckoutBoxContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default withRouter(connect(mapStateToProps)(CheckoutBox));
