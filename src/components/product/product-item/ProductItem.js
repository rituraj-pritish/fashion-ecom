import React from 'react';
import PropTypes from 'prop-types';
import { ItemBottom, ProductItemContainer } from './ProductItem.styles';
import 'swiper/css/swiper.css';

const ProductItem = ({ name, price, image }) => {
  return (
    <ProductItemContainer>
      <img src={image} alt={image} />
      <ItemBottom>
        <i className='fas fa-heart' />
        <h3>{name}</h3>
        <p>$ {price}</p>
        <button>ADD TO CART</button>
      </ItemBottom>
    </ProductItemContainer>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired
};
