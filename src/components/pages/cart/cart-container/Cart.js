import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { PageContainer } from '../../../../index.styles';
import CartItem from '../cart-item/CartItem';
import CheckoutBox from '../checkout-box/CheckoutBox';
import { ItemsContainer, Container } from './Cart.styles';

const Cart = ({ cart }) => {
  if (cart.length === 0) return <Redirect to='/home' />;
  return (
    <PageContainer>
      <Container>
        <ItemsContainer>
          {cart.map(item => (
            <CartItem page='cart' key={item.product.id} item={item} />
          ))}
        </ItemsContainer>
        <CheckoutBox cart={cart} />
      </Container>
    </PageContainer>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart
});

export default connect(mapStateToProps)(Cart);
