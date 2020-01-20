import React from 'react';

import Button from '../../../reusable-components/Button';
import { CheckoutBoxContainer, Container, Line } from './CheckoutBox.styles';

const CheckoutBox = ({ cart }) => {
  let subTotal = cart
    .reduce(
      (total, { product, variant, qty }) =>
        total + product.variants[variant].price * qty,
      0
    )
    .toFixed(2);

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
        <Button>checkout</Button>
      </Container>
    </CheckoutBoxContainer>
  );
};

export default CheckoutBox;
