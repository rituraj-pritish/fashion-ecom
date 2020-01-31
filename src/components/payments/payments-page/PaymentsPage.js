import React, { useState } from 'react';

import { PageContainer } from '../../../index.styles';
import PaymentButton from '../payment-button/PaymentButton';
import { connect } from 'react-redux';
import {
  CardInfo,
  OrderSuccess,
  Amount,
  Container
} from './PaymentsPage.styles';
import Button from '../../reusable-components/Button';
import { Link } from 'react-router-dom';

const PaymentsPage = ({ cart }) => {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  const amount = cart.reduce(
    (total, curr) =>
      total + curr.product.variants[curr.variant].price * curr.qty,
    0
  );
  return (
    <PageContainer>
      {!isOrderPlaced ? (
        <Container>
          <Amount>
            Total payable amount:
            <span>$ {amount}</span>
          </Amount>
          <PaymentButton amount={amount} setIsOrderPlaced={setIsOrderPlaced} />
          <CardInfo>* card no: 4242 4242 4242 4242</CardInfo>
        </Container>
      ) : (
        <Container>
          <OrderSuccess>
            Your order has been placed <br />
            Thankyou for shopping
          </OrderSuccess>
          <Link to='/'>
            <Button secondary fullWidth>
              Continue Shopping
            </Button>
          </Link>
        </Container>
      )}
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart
});

export default connect(mapStateToProps)(PaymentsPage);
