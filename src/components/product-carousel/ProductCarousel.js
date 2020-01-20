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
  ItemBottom,
  Title
} from './ProductCarousel.styles';
import ProductItem from '../product/product-item/ProductItem';
import { addToCart } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import Button from '../reusable-components/Button';

const params = {
  slidesPerView: 2,
  breakpoints: {
    600: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    800: {
      slidesPerView: 4,
      slidesPerGroup: 4,

    },
    1000: {
      slidesPerView: 5,
      slidesPerGroup: 5,

    },
  },
  lazy: true,
  slidesPerGroup: 2,
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

    const handleCartBtn = e => {
      if(isInCart) return;
      addToCart(product,0,1)
    }

    return (
      <CarouselItemContainer key={id}>
        {/* <LazyLoad className='lazyload product'> */}
        <Link to={`/product/${category}/${id}`}>
          <img src={images[0]} alt={name} />
        </Link>
        {/* </LazyLoad> */}
        <ItemBottom>
          <i className='fas fa-heart' />
          <h3>{name}</h3>
          <p>
            $ {price}
            {price % 1 === 0 && '.00'}
          </p>
          <Button fullWidth onClick={handleCartBtn} secondary={isInCart}>
            {isInCart ? 'ADDED TO CART' : 'ADD TO CART'}
          </Button>
        </ItemBottom>
      </CarouselItemContainer>
    );
  });

  return (
    <ProductCarouselContainer>
      <Title>{title[0].toUpperCase() + title.slice(1)}</Title>
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

