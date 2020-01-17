import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

import heart from '../../assets/heart.svg';
import {
  ProductCarouselContainer,
  CarouselItemContainer,
  ItemBottom
} from './ProductCarousel.styles';
import ProductItem from '../product/product-item/ProductItem';
import { addToCart } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const params = {
  slidesPerView: 5,
  lazy: true,
  slidesPerGroup: 5,
  loop: false,
  spaceBetween: 20,
  containerClass: 'carousel-container',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

const ProductCarousel = ({ title, data, addToCart, cart }) => {
  const render = data.map(product => {
    const { name, variants, id, category } = product;
    const { price, images } = variants[0];
    const isInCart = cart.find(item => item.product.id === id);
    return (
      <CarouselItemContainer key={id}>
        {/* <LazyLoad className='lazyload product'> */}
        <Link to={`/product/${category}/${id}`}>
          <img data-src={images[0]} alt={name} className='swiper-lazy' />
        </Link>
        {/* </LazyLoad> */}
        <ItemBottom>
          <i className='fas fa-heart' />
          <h3>{name}</h3>
          <p>
            $ {price}
            {price % 1 === 0 && '.00'}
          </p>
          {isInCart ? (
            <button>ADDED TO CART</button>
          ) : (
            <button onClick={() => addToCart(product, 0, 1)}>
              ADD TO CART
            </button>
          )}
        </ItemBottom>
      </CarouselItemContainer>
    );
  });

  return (
    <ProductCarouselContainer>
      <Swiper {...params}>{render}</Swiper>
    </ProductCarouselContainer>
  );
};

const mapStateToProps = state => ({
  cart: state.user.cart
});

export default connect(mapStateToProps, { addToCart })(ProductCarousel);

ProductCarousel.propTypes = {
  data: PropTypes.array.isRequired
};
