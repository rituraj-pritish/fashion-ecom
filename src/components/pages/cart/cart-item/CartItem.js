import React from 'react';
import LazyLoad from 'react-lazy-load';
import { connect } from 'react-redux';

import {
  CartItemContainer,
  Quantity,
  Details,
  Remove,
  Amount
} from './CartItem.styles';
import {
  updateCart,
  removeFromCart
} from '../../../../redux/actions/userActions';
import { Link } from 'react-router-dom';

const CartItem = ({ item, updateCart, removeFromCart }) => {
  const {
    product: { variants, name, category, id },
    variant,
    qty
  } = item;
  const imageUrl = variants[variant].images[0];
  const price = variants[variant].price;

  return (
    <CartItemContainer>
      <LazyLoad className='lazyload'>
        <Link to={`/product/${category}/${id}`}>
          <img src={imageUrl} alt={name} />
        </Link>
      </LazyLoad>

      <Details>
        <p>{name}</p>

        <Quantity>
          <i
            className='fas fa-minus'
            onClick={() => {
              if (qty === 1) return;
              updateCart(item.product, qty - 1);
            }}
          />
          <p>{qty}</p>
          <i
            className='fas fa-plus'
            onClick={() => updateCart(item.product, qty + 1)}
          />
        </Quantity>
      </Details>

      <Amount>$ {(Math.round(qty * price * 100) / 100).toFixed(2)}</Amount>

      <Remove
        onClick={() => removeFromCart(item.product)}
        className='far fa-trash-alt'
      />
    </CartItemContainer>
  );
};

export default connect(null, { updateCart, removeFromCart })(CartItem);
