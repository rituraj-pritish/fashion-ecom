import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Button from '../../common/Button';
import styled from 'styled-components';

export const StyledButton = styled.button``;

const PaymentButton = ({ amount, setIsOrderPlaced, emptyCart }) => {
  const handleToken = res => {
    console.log(res);
    emptyCart();
    setIsOrderPlaced(true);
  };

  return (
    <StripeCheckout
      name='Blogg'
      description={`Payment of $ ${amount}`}
      currency='USD'
      amount={amount * 100}
      token={handleToken}
      stripeKey='pk_test_6MmX11WOCB7TLNjgyIQsEQN400FaACm2cQ'
      allowRememberMe={false}
    >
      <Button fullWidth>Checkout</Button>
    </StripeCheckout>
  );
};

export default PaymentButton;
